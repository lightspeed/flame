import * as React from 'react';
import { customRender, fireEvent, act } from 'test-utils';

import { Dropdown, DropdownContent, useDropdown } from './Dropdown';

describe('<Dropdown />', () => {
  it('should render a button with out text content', () => {
    const { queryByText } = customRender(
      <Dropdown buttonContent="My Dropdown">
        <DropdownContent>Some dropdown content</DropdownContent>
      </Dropdown>,
    );

    expect(queryByText('My Dropdown')).toBeTruthy();
    expect(queryByText('Some dropdown content')).not.toBeVisible();
  });

  it('should reveal our dropdown content when we click on the button', async () => {
    const { queryByText } = customRender(
      <Dropdown buttonContent="My Dropdown">Some dropdown content</Dropdown>,
    );

    expect(queryByText('My Dropdown')).toBeTruthy();
    expect(queryByText('Some dropdown content')).not.toBeVisible();

    act(() => {
      fireEvent.click(queryByText('My Dropdown'));
    });

    expect(queryByText('Some dropdown content')).toBeVisible();
  });

  it('should close when we click outside the button', () => {
    const { queryByText } = customRender(
      <div>
        <Dropdown buttonContent="My Dropdown">Some dropdown content</Dropdown>
        <div>I am outside the dropdown</div>
      </div>,
    );

    expect(queryByText('My Dropdown')).toBeTruthy();
    expect(queryByText('Some dropdown content')).not.toBeVisible();

    act(() => {
      fireEvent.click(queryByText('My Dropdown'));
    });
    expect(queryByText('Some dropdown content')).toBeVisible();

    act(() => {
      fireEvent.click(queryByText('I am outside the dropdown'));
    });
    expect(queryByText('Some dropdown content')).not.toBeVisible();
  });

  it('should trigger our custom callback when we click the button', () => {
    const mockFn = jest.fn();
    const { queryByText } = customRender(
      <div>
        <Dropdown
          buttonContent="My Dropdown"
          onClick={toggle => {
            mockFn();
            toggle();
          }}
        >
          Some dropdown content
        </Dropdown>
        <div>I am outside the dropdown</div>
      </div>,
    );

    expect(queryByText('My Dropdown')).toBeTruthy();
    expect(queryByText('Some dropdown content')).not.toBeVisible();

    act(() => {
      fireEvent.click(queryByText('My Dropdown'));
    });
    expect(queryByText('Some dropdown content')).toBeVisible();

    expect(mockFn).toHaveBeenCalledTimes(1);

    act(() => {
      fireEvent.click(queryByText('I am outside the dropdown'));
    });
    expect(queryByText('Some dropdown content')).not.toBeVisible();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should close when we hit escape', () => {
    const { queryByText, container } = customRender(
      <div>
        <Dropdown buttonContent="My Dropdown">Some dropdown content</Dropdown>
        <div>I am outside the dropdown</div>
      </div>,
    );

    expect(queryByText('My Dropdown')).toBeTruthy();
    expect(queryByText('Some dropdown content')).not.toBeVisible();

    act(() => {
      fireEvent.click(queryByText('My Dropdown'));
    });
    expect(queryByText('Some dropdown content')).toBeVisible();

    act(() => {
      fireEvent.keyUp(container, { key: 'Escape', code: 'Escape' });
    });
    expect(queryByText('Some dropdown content')).not.toBeVisible();
  });

  it('should pass a close function when using a child function', () => {
    const { queryByText } = customRender(
      <Dropdown buttonContent="My Dropdown">
        {(close: any) => (
          <button type="button" onClick={close}>
            Close Button
          </button>
        )}
      </Dropdown>,
    );

    expect(queryByText('My Dropdown')).toBeTruthy();
    expect(queryByText('Close Button')).not.toBeVisible();

    act(() => {
      fireEvent.click(queryByText('My Dropdown'));
    });
    expect(queryByText('Close Button')).toBeVisible();

    act(() => {
      fireEvent.click(queryByText('Close Button'));
    });
    expect(queryByText('Close Button')).not.toBeVisible();
  });

  it('should close the dropdown via hooks', () => {
    const SomeButton = () => {
      const { closeDropdown } = useDropdown();
      return (
        <button type="button" onClick={closeDropdown}>
          Close Button
        </button>
      );
    };
    const { queryByText } = customRender(
      <Dropdown buttonContent="My Dropdown">
        <SomeButton />
      </Dropdown>,
    );

    expect(queryByText('My Dropdown')).toBeTruthy();
    expect(queryByText('Close Button')).not.toBeVisible();

    act(() => {
      fireEvent.click(queryByText('My Dropdown'));
    });
    expect(queryByText('Close Button')).toBeVisible();

    act(() => {
      fireEvent.click(queryByText('Close Button'));
    });
    expect(queryByText('Close Button')).not.toBeVisible();
  });
});
