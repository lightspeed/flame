import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { Global } from '@emotion/core';
import { FlameTheme, FlameGlobalStyles, Box } from '../src/Core';
import { Select } from '../src/Select';

class FlameStyling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTheme: localStorage.getItem('theme') || 'flame',
    };
  }

  render() {
    return (
      <React.Fragment>
        <FlameGlobalStyles themeName={this.state.selectedTheme} />
        <Global
          styles={{
            'a:hover': {
              color: '#4078c0',
            },
          }}
        />
        <FlameTheme themeName={this.state.selectedTheme}>
          <Box p={3}>
            <Box mb={2} width="200px" className="hide-in-percy">
              <Select
                value={this.state.selectedTheme}
                onChange={e => {
                  this.setState({ selectedTheme: e.target.value });
                  window.localStorage.setItem('theme', e.target.value);
                }}
              >
                <option value="flame">Flame (Default theme)</option>
                <option value="light">Lightspeed (Old theme)</option>
                <option value="experimentaldark">Dark (Experimental)</option>
              </Select>
            </Box>
            {this.props.children}
          </Box>
        </FlameTheme>
      </React.Fragment>
    );
  }
}

const FlameStylingDecorator = storyFn => <FlameStyling>{storyFn()}</FlameStyling>;

addDecorator(FlameStylingDecorator);

addParameters({
  options: {
    name: 'Lightspeed Flame',
    panelPosition: 'right',
  },
});
