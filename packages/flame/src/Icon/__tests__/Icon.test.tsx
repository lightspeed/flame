import React from 'react';
import { createComponent, customRender } from 'test-utils';
import { Icon } from '../index';

describe('Icon', () => {
  it('renders correctly', () => {
    const component = createComponent(<Icon name="settings" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with color', () => {
    const component = createComponent(<Icon name="files" color="cr-blue" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with baseColor and detailColor', () => {
    const component = createComponent(
      <Icon name="products-resto" baseColor="yellow-200" detailsColor="maple-300" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  ['', null, undefined, 'invalid-icon-example'].forEach(value => {
    it(`renders blank when "${value}" icon name is provided`, () => {
      const { container } = customRender(<Icon name={value} />);
      const icon = container.querySelector('.cr-icon');
      expect(icon).toBeFalsy();
    });
  });
});
