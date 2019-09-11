import * as React from 'react';
import { customRender, fireEvent } from 'test-utils';

import { useEventListener } from '../useEventListener';

const TestComponent: React.FC<{ cb: () => void; eventKey?: string }> = ({ cb, eventKey }) => {
  useEventListener(eventKey, cb);
  return <div data-testid="target">Just some component</div>;
};

describe('useEventListener', () => {
  it('should trigger a callback when doing a keypress', () => {
    const mockFn = jest.fn();
    const { container } = customRender(<TestComponent cb={mockFn} eventKey="keypress" />);

    fireEvent.keyPress(container, { key: 'A' });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should override the keypress event with our own custom event', () => {
    const mockFn = jest.fn();
    const { container } = customRender(<TestComponent cb={mockFn} eventKey="keyup" />);

    fireEvent.keyPress(container, { key: 'A' });
    expect(mockFn).toHaveBeenCalledTimes(0);

    fireEvent.keyUp(container, { key: 'A' });
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
