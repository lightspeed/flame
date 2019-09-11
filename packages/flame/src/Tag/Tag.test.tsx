import * as React from 'react';
import { createComponent, customRender, fireEvent } from 'test-utils';
import { Tag } from './Tag';

describe('<Tag />', () => {
  describe('Snapshots', () => {
    const renderTests: {
      when: string;
      props: {
        onRemove?: any;
        size?: any;
      };
    }[] = [
      { when: 'default', props: {} },
      { when: 'dismissible', props: { onRemove: () => {} } },
      { when: 'small', props: { size: 'small', onRemove: () => {} } },
    ];
    renderTests.forEach(test => {
      describe(`when ${test.when}`, () => {
        it('should render correctly', () => {
          const component = createComponent(<Tag {...test.props}>Tag</Tag>);
          expect(component.toJSON()).toMatchSnapshot();
        });
      });
    });
  });

  describe('Render', () => {
    it('should render with a className attribute', () => {
      const className = 'custom-class';
      const { container } = customRender(<Tag className={className}>Tag</Tag>);
      expect(container.querySelectorAll('.custom-class')).toBeTruthy();
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    it('should fire onClick on TagLabel click', () => {
      const handleClick = jest.fn();
      const handleClose = jest.fn();
      const { getByText } = customRender(
        <Tag onClick={handleClick} onRemove={handleClose}>
          TagName
        </Tag>,
      );
      fireEvent.click(getByText('TagName'));
      expect(handleClick).toHaveBeenCalled();
      expect(handleClose).not.toHaveBeenCalled();
    });

    it('should fire onRemove on TagRemove click', () => {
      const handleClick = jest.fn();
      const handleClose = jest.fn();
      const { getByTestId } = customRender(
        <Tag onClick={handleClick} onRemove={handleClose}>
          Tag
        </Tag>,
      );
      fireEvent.click(getByTestId('tag-remove-button'));
      expect(handleClick).not.toHaveBeenCalled();
      expect(handleClose).toHaveBeenCalled();
    });
  });
});
