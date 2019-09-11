import * as React from 'react';
import { customRender, fireEvent } from 'test-utils';

import { useOnClickOutside } from '../useOnClickOutside';

const TestComponent: React.FC<{ cb: () => void }> = ({ cb }) => {
  const targetRef = React.createRef<HTMLDivElement>();
  useOnClickOutside(targetRef, cb);

  return (
    <div>
      <div ref={targetRef} data-testid="target">
        The Target
      </div>
      <div data-testid="outside">Something outside the target</div>
    </div>
  );
};

describe('useOnClickOutside', () => {
  it('should trigger a callback when clicking outside a target ref', () => {
    const mockFn = jest.fn();
    const { getByTestId } = customRender(<TestComponent cb={mockFn} />);

    fireEvent.click(getByTestId('outside'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should trigger a callback when touching outside a target ref', () => {
    const mockFn = jest.fn();
    const { getByTestId } = customRender(<TestComponent cb={mockFn} />);

    fireEvent.touchStart(getByTestId('outside'));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should not trigger a callback when clicking inside the target ref', () => {
    const mockFn = jest.fn();
    const { getByTestId } = customRender(<TestComponent cb={mockFn} />);

    fireEvent.click(getByTestId('target'));
    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it('should not trigger a callback when touching inside the target ref', () => {
    const mockFn = jest.fn();
    const { getByTestId } = customRender(<TestComponent cb={mockFn} />);

    fireEvent.touchStart(getByTestId('target'));
    expect(mockFn).toHaveBeenCalledTimes(0);
  });
});
