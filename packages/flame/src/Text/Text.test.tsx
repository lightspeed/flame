import * as React from 'react';
import { createComponent, customRender } from 'test-utils';
import { Text, Heading1, Heading2, Heading3, Heading4, TextLink } from './Text';

describe('Text', () => {
  it('should render a P tag by default', () => {
    const { getByText } = customRender(<Text>My Element should be a p by default</Text>);
    const element = getByText('My Element should be a p by default');
    expect(element.nodeName).toBe('P');
  });

  it('should be ableto swap out the underlying element with the `element` prop', () => {
    const { getByText } = customRender(<Text as="span">Suddenly, I am span</Text>);
    const element = getByText('Suddenly, I am span');
    expect(element.nodeName).toBe('SPAN');
  });

  describe('Snapshots', () => {
    it('should render Heading1 with appropriate styles', () => {
      const component = createComponent(<Heading1>My Heading</Heading1>);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render Heading2 with appropriate styles', () => {
      const component = createComponent(<Heading2>My Heading</Heading2>);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render Heading3 with appropriate styles', () => {
      const component = createComponent(<Heading3>My Heading</Heading3>);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render Heading4 with appropriate styles', () => {
      const component = createComponent(<Heading4>My Heading</Heading4>);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render TextLink with appropriate styles', () => {
      const component = createComponent(<TextLink href="www.google.com">My Heading</TextLink>);
      expect(component.toJSON()).toMatchSnapshot();
    });
  });
});
