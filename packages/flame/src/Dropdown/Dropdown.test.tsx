import * as React from 'react';
import { customRender, fireEvent, createComponent } from 'test-utils';

import { Dropdown, useDropdown } from './Dropdown';

describe('<Dropdown />', () => {
  describe('Snapshots', () => {
    it('should match placement default (bottom) rendering', () => {
      const component = createComponent(
        <Dropdown buttonContent="My Dropdown">Some dropdown content</Dropdown>,
      );

      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should match placement top rendering', () => {
      const component = createComponent(
        <Dropdown buttonContent="My Dropdown" placement="top">
          Some dropdown content
        </Dropdown>,
      );

      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should match placement left rendering', () => {
      const component = createComponent(
        <Dropdown buttonContent="My Dropdown" placement="left">
          Some dropdown content
        </Dropdown>,
      );

      expect(component.toJSON()).toMatchSnapshot();
    });

    it('should match placement right rendering', () => {
      const component = createComponent(
        <Dropdown buttonContent="My Dropdown" placement="right">
          Some dropdown content
        </Dropdown>,
      );

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  it('should render a button with out text content', () => {
    const { queryByText } = customRender(
      <Dropdown buttonContent="My Dropdown">Some dropdown content</Dropdown>,
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

    fireEvent.click(queryByText('My Dropdown'));

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

    fireEvent.click(queryByText('My Dropdown'));
    expect(queryByText('Some dropdown content')).toBeVisible();

    fireEvent.click(queryByText('I am outside the dropdown'));
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

    fireEvent.click(queryByText('My Dropdown'));
    expect(queryByText('Close Button')).toBeVisible();

    fireEvent.click(queryByText('Close Button'));
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

    fireEvent.click(queryByText('My Dropdown'));
    expect(queryByText('Close Button')).toBeVisible();

    fireEvent.click(queryByText('Close Button'));
    expect(queryByText('Close Button')).not.toBeVisible();
  });
});
