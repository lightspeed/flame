import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'flameThemeSwitcher';
const PARAM_KEY = 'flameThemeSwitcher';
const PANEL_ID = `${ADDON_ID}/panel`;
const PANEL_TITLE = 'Theme Switcher';

const ThemeSwitcher = () => {
  const [state, setState] = React.useState({
    selectedTheme: localStorage.getItem('theme') || 'houston',
  });

  const onChange = value => {
    setState({ selectedTheme: value });
    window.localStorage.setItem('theme', value);
  };

  return (
    <div>
      <fieldset>
        <legend>Select your theme</legend>
        <label htmlFor="houstoncolors">
          <input
            type="radio"
            value="houston"
            id="houstoncolors"
            name="houston-theme"
            onChange={() => onChange('houston')}
            checked={state.selectedTheme === 'houston'}
          />
          Houston (Default theme)
        </label>
        <br />
        <label htmlFor="flamecolors">
          <input
            type="radio"
            value="flame"
            id="flamecolors"
            name="flame-theme"
            onChange={() => onChange('flame')}
            checked={state.selectedTheme === 'flame'}
          />
          Flame
        </label>
        <br />
        <label htmlFor="lscolors">
          <input
            type="radio"
            value="light"
            id="lscolors"
            name="flame-theme"
            onChange={() => onChange('light')}
            checked={state.selectedTheme === 'light'}
          />
          Lightspeed (Old theme)
        </label>
      </fieldset>
    </div>
  );
};

addons.register(ADDON_ID, () => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <ThemeSwitcher />
    </AddonPanel>
  );

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: PANEL_TITLE,
    render,
    paramKey: PARAM_KEY,
  });
});
