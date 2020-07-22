import React from 'react';
import { Global } from '@emotion/core';
import { addDecorator, addParameters } from '@storybook/react';
import { FlameGlobalStyles, FlameTheme, Box } from '../packages/flame/src/Core/index.tsx';
import { Select } from '../packages/flame/src/Select/index.tsx';
import './stories.scss';

const FlameStyling = ({ children }) => {
  const [state, setState] = React.useState({
    selectedTheme: localStorage.getItem('theme') || 'flame',
  });

  return (
    <React.Fragment>
      <FlameGlobalStyles themeName={state.selectedTheme} />
      <Global
        styles={{
          'a:hover': {
            color: '#4078c0',
          },
        }}
      />
      <FlameTheme themeName={state.selectedTheme}>
        <Box p={3}>
          <Box mb={2} width="200px" className="hide-in-percy chromatic-ignore">
            <Select
              value={state.selectedTheme}
              onChange={e => {
                setState({ selectedTheme: e.target.value });
                window.localStorage.setItem('theme', e.target.value);
              }}
            >
              <option value="flame">Flame (Default theme)</option>
              <option value="light">Lightspeed (Old theme)</option>
              <option value="experimentaldark">Dark (Experimental)</option>
            </Select>
          </Box>
          {children}
        </Box>
      </FlameTheme>
    </React.Fragment>
  );
};
const FlameStylingDecorator = (storyFn, context) => {
  if (!context.id.includes('flame-css')) {
    return <FlameStyling>{storyFn()}</FlameStyling>;
  }

  return storyFn();
};
const headers = ['Theme', 'Components'];
// https://github.com/storybookjs/storybook/issues/6327#issuecomment-613122487
const storySort = (a, b) => {
  // a[1].kind is something like: Components|Accordion. Using "Components" for the headers array.
  // Using Components from ^^^
  const aHeader = a[1].kind.substr(0, a[1].kind.indexOf('|'));
  const bHeader = b[1].kind.substr(0, b[1].kind.indexOf('|'));

  if (aHeader !== bHeader) {
    // Comparing something like "components-accordion--main" to "getting-started-app--main".
    const aHeaderIndex = headers.findIndex(h => h === aHeader);
    const bHeaderIndex = headers.findIndex(h => h === bHeader);
    return aHeaderIndex - bHeaderIndex;
  }

  return 0;
  /* Or instead of `return 0` compare something like "components-accordion--small" to "components-accordion--large"
   * and sort the stories inside each component...
   */
  // return a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
};

addDecorator(FlameStylingDecorator);

addParameters({
  options: {
    name: 'Lightspeed Flame',
    panelPosition: 'right',
    storySort,
  },
});
