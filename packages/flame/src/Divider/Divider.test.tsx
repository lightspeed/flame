/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';

import { customRender, createComponent } from 'test-utils';

import { Divider } from './Divider';
import { Card } from '../Card';

describe('Divider', () => {
  describe('with content', () => {
    describe(`when empty props`, () => {
      it('should render correctly', () => {
        const component = createComponent(
          <Divider>
            <span>T-Shirt</span>
          </Divider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
      });
    });

    describe(`when 'variant' dotted is set`, () => {
      it('should render correctly', () => {
        const component = createComponent(
          <Divider variant="dotted">
            <span>T-Shirt</span>
          </Divider>,
        );
        expect(component.toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('without content', () => {
    describe(`when empty props`, () => {
      it('should render correctly', () => {
        const component = createComponent(<Divider />);
        expect(component.toJSON()).toMatchSnapshot();
      });
    });

    describe(`when 'variant' dotted is set`, () => {
      it('should render correctly', () => {
        const component = createComponent(<Divider variant="dotted" />);
        expect(component.toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('Render', () => {
    it('renders with a className attribute', () => {
      const className = 'custom-class';
      const { container } = customRender(<Divider className={className} />);
      expect(container.querySelector('.custom-class')).toBeTruthy();
    });
  });

  describe('Interaction with Card component', () => {
    beforeAll(() => {
      // We don't actually care about the Card itself, only the named reference.
      // Mock it out to keep the reference and not pollute our snapshot
      jest.mock('../Card', () => ({
        Card: (child: any) => <div>{child}</div>,
      }));
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    it('should apply a special style when inside a Card component', () => {
      const component = createComponent(
        <Card>
          <Divider />,
        </Card>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should still be possible to pass a custom color', () => {
      const component = createComponent(
        <Card>
          <Divider color="hotpink" />,
        </Card>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
