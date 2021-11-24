import * as React from 'react';
import { customRender, fireEvent, act, screen } from 'test-utils';

import { Dropdown, DropdownContent, useDropdown } from './Dropdown';

describe('<Dropdown />', () => {
  it('should render a button without text content', async () => {
    await act(async () => {
      customRender(
        <Dropdown buttonContent="My Dropdown">
          <DropdownContent>Some dropdown content</DropdownContent>
        </Dropdown>,
      );
    });

    expect(screen.queryByText('My Dropdown')).toBeTruthy();
    expect(screen.queryByText('Some dropdown content')).not.toBeVisible();
  });

  it('should reveal our dropdown content when we click on the button', async () => {
    await act(async () => {
      customRender(<Dropdown buttonContent="My Dropdown">Some dropdown content</Dropdown>);
    });

    expect(screen.queryByText('My Dropdown')).toBeTruthy();
    expect(screen.queryByText('Some dropdown content')).not.toBeVisible();

    fireEvent.click(screen.queryByText('My Dropdown').previousSibling);

    expect(screen.queryByText('Some dropdown content')).toBeVisible();
  });

  it('should close when we click outside the button', async () => {
    await act(async () => {
      customRender(
        <div>
          <Dropdown buttonContent="My Dropdown">Some dropdown content</Dropdown>
          <div>I am outside the dropdown</div>
        </div>,
      );
    });

    expect(screen.queryByText('My Dropdown')).toBeTruthy();
    expect(screen.queryByText('Some dropdown content')).not.toBeVisible();

    await act(async () => {
      fireEvent.click(screen.queryByText('My Dropdown').previousSibling);
    });
    expect(screen.queryByText('Some dropdown content')).toBeVisible();

    await act(async () => {
      fireEvent.click(screen.queryByText('I am outside the dropdown'));
    });
    expect(screen.queryByText('Some dropdown content')).not.toBeVisible();
  });

  it('should trigger our custom callback when we click the button', async () => {
    const mockFn = jest.fn();
    await act(async () => {
      customRender(
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
    });

    expect(screen.queryByText('My Dropdown')).toBeTruthy();
    expect(screen.queryByText('Some dropdown content')).not.toBeVisible();

    await act(async () => {
      fireEvent.click(screen.queryByText('My Dropdown').previousSibling);
    });
    expect(screen.queryByText('Some dropdown content')).toBeVisible();

    expect(mockFn).toHaveBeenCalledTimes(1);

    await act(async () => {
      fireEvent.click(screen.queryByText('I am outside the dropdown'));
    });
    expect(screen.queryByText('Some dropdown content')).not.toBeVisible();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should close when we hit escape', async () => {
    let componentContainer: any;
    await act(async () => {
      const { container } = customRender(
        <div>
          <Dropdown buttonContent="My Dropdown">Some dropdown content</Dropdown>
          <div>I am outside the dropdown</div>
        </div>,
      );
      componentContainer = container;
    });

    expect(screen.queryByText('My Dropdown')).toBeTruthy();
    expect(screen.queryByText('Some dropdown content')).not.toBeVisible();

    await act(async () => {
      fireEvent.click(screen.queryByText('My Dropdown').previousSibling);
    });
    expect(screen.queryByText('Some dropdown content')).toBeVisible();

    await act(async () => {
      fireEvent.keyUp(componentContainer, { key: 'Escape', code: 'Escape' });
    });
    expect(screen.queryByText('Some dropdown content')).not.toBeVisible();
  });

  it('should pass a close function when using a child function', async () => {
    await act(async () => {
      customRender(
        <Dropdown buttonContent="My Dropdown">
          {(close: any) => (
            <button type="button" onClick={close}>
              Close Button
            </button>
          )}
        </Dropdown>,
      );
    });

    expect(screen.queryByText('My Dropdown')).toBeTruthy();
    expect(screen.queryByText('Close Button')).not.toBeVisible();

    await act(async () => {
      fireEvent.click(screen.queryByText('My Dropdown').previousSibling);
    });
    expect(screen.queryByText('Close Button')).toBeVisible();

    await act(async () => {
      fireEvent.click(screen.queryByText('Close Button'));
    });
    expect(screen.queryByText('Close Button')).not.toBeVisible();
  });

  it('should close the dropdown via hooks', async () => {
    const SomeButton = () => {
      const { closeDropdown } = useDropdown();
      return (
        <button type="button" onClick={closeDropdown}>
          Close Button
        </button>
      );
    };
    await act(async () => {
      customRender(
        <Dropdown buttonContent="My Dropdown">
          <SomeButton />
        </Dropdown>,
      );
    });

    expect(screen.queryByText('My Dropdown')).toBeTruthy();
    expect(screen.queryByText('Close Button')).not.toBeVisible();

    await act(async () => {
      fireEvent.click(screen.queryByText('My Dropdown').previousSibling);
    });
    expect(screen.queryByText('Close Button')).toBeVisible();

    await act(async () => {
      fireEvent.click(screen.queryByText('Close Button'));
    });
    expect(screen.queryByText('Close Button')).not.toBeVisible();
  });
});
