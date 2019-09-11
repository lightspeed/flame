/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { customRender, fireEvent } from 'test-utils';
import { Button } from './Button';
import { Icon } from '../Icon';

describe('Button Component', () => {
  it('should render a button with an icon child', () => {
    const { getByTestId } = customRender(
      <Button>
        <Icon name="small-chevron-left" data-testid="button-with-icon" />
      </Button>,
    );

    getByTestId('button-with-icon');
  });

  it('should render a button tag', () => {
    const { getByTestId } = customRender(<Button data-testid="regular-button">Hello World</Button>);
    const domNode = getByTestId('regular-button');

    expect(domNode.nodeName).toBe('BUTTON');
    expect(domNode).toHaveTextContent('Hello World');
  });

  it('should render an anchor tag', () => {
    const { getByTestId } = customRender(
      <Button href="http://www.lightspeedhq.com" data-testid="button-as-link">
        Hello World
      </Button>,
    );
    const domNode = getByTestId('button-as-link');

    expect(domNode.nodeName).toBe('A');
    expect(domNode).toHaveTextContent('Hello World');
  });

  it('should render an anchor tag with target blank', () => {
    const { getByTestId } = customRender(
      <Button href="http://www.lightspeedhq.com" data-testid="button-as-link" target="_blank">
        Hello World
      </Button>,
    );
    const domNode: any = getByTestId('button-as-link');

    expect(domNode.nodeName).toBe('A');
    expect(domNode.target).toBe('_blank');
  });

  it('should handle have forwarded onClick to the button', () => {
    const mockFn = jest.fn();
    const { getByTestId } = customRender(
      <Button onClick={mockFn} data-testid="good-ol-button">
        Hello World
      </Button>,
    );
    const domNode = getByTestId('good-ol-button');

    fireEvent.click(domNode);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should handle have forwarded className to the button', () => {
    const { container } = customRender(<Button className="myClassname">Hello World</Button>);

    expect(container.querySelector('.myClassname')).toBeTruthy();
  });

  it('should not trigger anything when disabled', () => {
    const mockFn = jest.fn();
    const { getByTestId } = customRender(
      <Button onClick={mockFn} data-testid="disabled-button" disabled>
        Hello World
      </Button>,
    );
    const domNode = getByTestId('disabled-button');

    fireEvent.click(domNode);
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('should disable actions when loading is true, yet disabled is false', () => {
    const mockFn = jest.fn();
    const { getByTestId } = customRender(
      <Button onClick={mockFn} data-testid="disabled-button" loading disabled={false}>
        Hello World
      </Button>,
    );
    const domNode = getByTestId('disabled-button');

    fireEvent.click(domNode);
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('should render a loading button', () => {
    const { getByTitle, getByText } = customRender(
      <Button loading data-testid="loading-button">
        this text should be invisible
      </Button>,
    );
    const domNode = getByText('this text should be invisible');

    getByTitle('Loading...');
    expect(domNode).not.toBeVisible();
  });
});
