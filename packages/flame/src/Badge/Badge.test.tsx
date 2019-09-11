/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';

import { createComponent } from 'test-utils';
import { Badge, PillBadge } from './Badge';

const types = ['default', 'success', 'info', 'warning', 'danger', 'important'];

describe('<Badge />', () => {
  it('renders correctly', () => {
    const component = createComponent(<Badge>Hello World</Badge>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders small variant', () => {
    const component = createComponent(<Badge size="small">Hello World</Badge>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders pill variant', () => {
    const component = createComponent(<PillBadge>Hello World</PillBadge>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with custom background and text color', () => {
    const component = createComponent(
      <Badge bg="#ddd" color="#222">
        Hello World
      </Badge>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with custom background only', () => {
    const component = createComponent(<Badge bg="#ddd">Hello World</Badge>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with custom text color only', () => {
    const component = createComponent(<Badge color="#222">Hello World</Badge>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  types.forEach(type => {
    it(`renders correctly with ${type} type`, () => {
      const component = createComponent(<Badge type={type as any}>Hello World</Badge>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
