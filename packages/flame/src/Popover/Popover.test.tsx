/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { createComponent, customRender, fireEvent } from 'test-utils';

import { Popover, PopoverProps } from './Popover';

const sharedTarget = ({ targetProps, targetEvents, active }: any = {}) => (
  <button
    type="button"
    className={active ? 'is-active' : undefined}
    {...targetProps}
    {...targetEvents}
  >
    Trigger
  </button>
);

describe('Popover', () => {
  const renderTests: {
    when: string;
    props: Partial<PopoverProps>;
  }[] = [
    {
      when: 'default',
      props: {},
    },
    {
      when: 'light',
      props: {
        light: true,
      },
    },
    {
      when: 'no arrow',
      props: {
        noArrow: true,
      },
    },
    {
      when: 'placement top',
      props: {
        placement: 'top',
      },
    },
    {
      when: 'placement top-start',
      props: {
        placement: 'top-start',
      },
    },
    {
      when: 'placement top-end',
      props: {
        placement: 'top-end',
      },
    },
    {
      when: 'placement left',
      props: {
        placement: 'left',
      },
    },
    {
      when: 'placement right',
      props: {
        placement: 'right',
      },
    },
    {
      when: 'placement bottom',
      props: {
        placement: 'bottom',
      },
    },
    {
      when: 'placement bottom-start',
      props: {
        placement: 'bottom-start',
      },
    },
    {
      when: 'placement bottom-end',
      props: {
        placement: 'bottom-end',
      },
    },
  ];

  renderTests.forEach(test => {
    describe(`when ${test.when}`, () => {
      it('should render correctly opened', () => {
        const component = createComponent(
          <Popover target={sharedTarget} {...test.props} isOpen autoClose={false}>
            <span>Some content</span>
          </Popover>,
        );
        expect(component.toJSON()).toMatchSnapshot();
      });
    });
  });

  describe('mounted', () => {
    it('should be able to mount the popover closed', () => {
      const { queryByText } = customRender(
        <Popover target={sharedTarget} onOpen={() => {}} onClose={() => {}} isOpen={false}>
          Hello World
        </Popover>,
      );
      const element = queryByText('Hello World');
      expect(element).toBeFalsy();
    });

    it('should be able to mount the popover opened', () => {
      const { getByText } = customRender(
        <Popover target={sharedTarget} onOpen={() => {}} onClose={() => {}} isOpen>
          Hello World
        </Popover>,
      );
      getByText('Hello World');
    });

    it('should call onClose when clicking outside', () => {
      const onCloseSpy = jest.fn();
      const { getByTestId } = customRender(
        <>
          <Popover target={sharedTarget} onOpen={() => {}} onClose={onCloseSpy} isOpen>
            Hello World
          </Popover>
          <button type="button" data-testid="random-button" />
        </>,
      );
      const elementOutsideOfPopover = getByTestId('random-button');

      expect(onCloseSpy).not.toHaveBeenCalled();

      fireEvent.click(elementOutsideOfPopover);

      expect(onCloseSpy).toHaveBeenCalled();
    });

    it('should not call onClose by clicking outside when autoClose={false}', () => {
      const onCloseSpy = jest.fn();
      const { getByTestId } = customRender(
        <>
          <Popover
            target={sharedTarget}
            autoClose={false}
            onOpen={() => {}}
            onClose={onCloseSpy}
            isOpen
          >
            Hello World
          </Popover>
          <button type="button" data-testid="random-button" />
        </>,
      );
      const elementOutsideOfPopover = getByTestId('random-button');

      expect(onCloseSpy).not.toHaveBeenCalled();

      fireEvent.click(elementOutsideOfPopover);

      expect(onCloseSpy).not.toHaveBeenCalled();
    });

    it('should call onOpen when opening the popover', () => {
      const handleOpen = jest.fn();

      const { getByText } = customRender(
        <Popover target={sharedTarget} onOpen={handleOpen} onClose={() => {}} isOpen={false}>
          Hello World
        </Popover>,
      );
      fireEvent.click(getByText('Trigger'));
      expect(handleOpen).toHaveBeenCalled();
    });

    it('should call onClose when closing an opened popover', () => {
      const handleClose = jest.fn();
      const { getByText } = customRender(
        <Popover target={sharedTarget} onOpen={() => {}} onClose={handleClose} isOpen={true}>
          Hello World
        </Popover>,
      );
      fireEvent.click(getByText('Trigger'));
      expect(handleClose).toHaveBeenCalled();
    });

    it('renders with a className attribute', () => {
      const className = 'custom-class';
      const { container } = customRender(
        <Popover target={sharedTarget} onOpen={() => {}} className={className} isOpen>
          Hello World
        </Popover>,
      );

      expect(container.querySelector('.custom-class')).toBeTruthy();
    });
  });
});
