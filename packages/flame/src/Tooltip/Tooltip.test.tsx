import * as React from 'react';
import { createComponent, customRender, fireEvent } from '../../../../tests/test-utils';

import { Tooltip } from './Tooltip';

const defaultProps = {
  content: 'Tooltip Content',
  children: 'Hello World',
};

describe('Tooltip', () => {
  describe('renders', () => {
    it('correctly', () => {
      const component = createComponent(<Tooltip {...defaultProps} />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('always active', () => {
      const component = createComponent(<Tooltip {...defaultProps} active />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('in light mode', () => {
      const component = createComponent(<Tooltip {...defaultProps} light active />);
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders with a className attribute', () => {
      const className = 'custom-class';
      const { container } = customRender(
        <Tooltip {...defaultProps} active className={className} />,
      );
      expect(container.querySelector('.custom-class')).toBeTruthy();
    });
  });

  describe('events', () => {
    it('sets tooltip to active onFocus and inactive on blur', () => {
      const { getByText, queryByText } = customRender(<Tooltip {...defaultProps} />);
      fireEvent.focus(getByText('Hello World'));
      expect(getByText('Tooltip Content')).toBeTruthy();

      fireEvent.blur(getByText('Hello World'));
      expect(queryByText('Tooltip Content')).toBeNull();
    });

    it('sets tooltip to active onMouseEnter and inactive when mouse leaves', () => {
      const { getByText, queryByText } = customRender(<Tooltip {...defaultProps} />);
      fireEvent.mouseEnter(getByText('Hello World'));
      expect(getByText('Tooltip Content')).toBeTruthy();

      fireEvent.mouseLeave(getByText('Hello World'));
      expect(queryByText('Tooltip Content')).toBeNull();
    });
  });
});
