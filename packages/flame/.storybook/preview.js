import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { Global } from '@emotion/core';
import { FlameTheme, FlameGlobalStyles, Box } from '../src/Core';
import { Select } from '../src/Select';

// @TODO: Fix stories that are still using css classes and flush this
import './stories.scss';

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
          <Box p={3} className="theme-container">
            <Box mb={2} width="200px" className="hide-in-percy theme-container__select-wrapper">
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
  docs: {
    container: props => {
      return (
        <FlameTheme>
          <Global
            styles={{
              '.theme-container': {
                padding: '0 !important',
              },
              '.theme-container__select-wrapper': {
                display: 'none',
              },
              '.sbdocs.sbdocs-preview': {
                // TODO: leverage useTheme to get BG value
                backgroundColor: '#F2F5F8',
              },
            }}
          />
          <DocsContainer {...props} />
        </FlameTheme>
      );
    },
  },
});
