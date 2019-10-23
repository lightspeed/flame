/* eslint-disable import/no-extraneous-dependencies */

import * as React from 'react';
import { createComponent, customRender } from 'test-utils';
import { Group, GroupAddon } from './Group';

describe('<Group />', () => {
  describe('Snapshots', () => {
    it('renders a group', () => {
      const component = createComponent(
        <Group>
          <GroupAddon>$</GroupAddon>
          <input type="text" />
          <button type="button">My button</button>
          <GroupAddon>/ per unit</GroupAddon>
        </Group>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('Render', () => {
    it('render Group with a className attribute', () => {
      const className = 'custom-class';
      const groupAddonClassName = 'groupAddonClassName';
      const anotherClassName = 'anotherClassName';

      const { container } = customRender(
        <Group className={className}>
          <GroupAddon className={groupAddonClassName}>$</GroupAddon>
          <span className={anotherClassName}>Test Group</span>
        </Group>,
      );
      const groupEl = container.querySelector('.custom-class');
      const groupAddonEl = container.querySelector('.groupAddonClassName');
      const spanEl = container.querySelector('.anotherClassName');

      expect(groupEl).toBeTruthy();
      expect(groupAddonEl).toBeTruthy();
      expect(spanEl).toBeTruthy();
    });
  });
});
