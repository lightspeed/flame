import * as React from 'react';

import { customRender, createComponent } from 'test-utils';
import { Card, CardHeader, CardFooter, CardSection } from './Card';

describe('Card', () => {
  describe('Types', () => {
    const tests = [{ testName: 'default' }, { testName: 'top', top: true }];

    tests.forEach(props => {
      it(`renders correctly (${props.testName})`, () => {
        const component = createComponent(
          <Card {...props}>
            <CardSection>Card Content</CardSection>
          </Card>,
        );
        expect(component.toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('Spacing', () => {
    it('render a large CardHeader, Section and Footer when Card has large prop', () => {
      const component = createComponent(
        <Card large>
          <CardHeader title="Card Title" />
          <CardSection>Card Content</CardSection>
          <CardFooter>Card Footer</CardFooter>
        </Card>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('render a noSpacing CardHeader, Section and Footer when Card has noSpacing prop', () => {
      const component = createComponent(
        <Card noSpacing>
          <CardHeader title="Card Title" />
          <CardSection>Card Content</CardSection>
          <CardFooter>Card Footer</CardFooter>
        </Card>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('allows for sub-components to pass their own size', () => {
      const component = createComponent(
        <Card>
          <CardHeader title="Card Title" large />
          <CardSection large>Card Content</CardSection>
          <CardFooter large>Card Footer</CardFooter>
        </Card>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders section without spacing', () => {
      const component = createComponent(
        <Card>
          <CardSection noSpacing>Card Content</CardSection>
        </Card>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders a card with an optional section', () => {
      const displayCardSection = false;
      const component = createComponent(
        <Card>{displayCardSection && <CardSection noSpacing>Card Content</CardSection>}</Card>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('CardHeader', () => {
    it('renders correctly', () => {
      const component = createComponent(
        <Card>
          <CardHeader title="Card Title" />
        </Card>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders with actions', () => {
      const component = createComponent(
        <Card>
          <CardHeader title="Card Title" actions={<span>Action</span>} />
        </Card>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('CardFooter', () => {
    it('renders correctly', () => {
      const component = createComponent(
        <Card>
          <CardFooter>Card Footer</CardFooter>
        </Card>,
      );
      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe('Render', () => {
    it('render the Card with a className attribute', () => {
      const className = 'custom-class';
      const { container } = customRender(<Card className={className}>Test Card</Card>);
      expect(container.querySelector('.custom-class')).toBeTruthy();
    });

    it('render the CardHeader component with a className attribute', () => {
      const className = 'custom-class';
      const { container } = customRender(
        <Card>
          <CardHeader className={className} />
        </Card>,
      );
      expect(container.querySelector('.custom-class')).toBeTruthy();
    });

    it('render the CardSection with a className attribute', () => {
      const className = 'custom-class';
      const { container } = customRender(
        <Card>
          <CardSection className={className}>Card Content</CardSection>
        </Card>,
      );
      expect(container.querySelector('.custom-class')).toBeTruthy();
    });

    it('render the CardFooter with a className attribute', () => {
      const className = 'custom-class';
      const { container } = customRender(
        <Card>
          <CardFooter className={className}>Card Footer</CardFooter>
        </Card>,
      );
      expect(container.querySelector('.custom-class')).toBeTruthy();
    });
  });
});
