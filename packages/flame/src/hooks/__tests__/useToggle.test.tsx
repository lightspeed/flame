import * as React from 'react';
import { customRender, fireEvent } from 'test-utils';

import { useToggle } from '../useToggle';

const TestComponent: React.FC<{ initialState?: boolean }> = ({ initialState = false }) => {
  const { isActive, toggle, setActive, setInactive } = useToggle(initialState);
  return (
    <div>
      <div>{isActive ? 'active' : 'inactive'}</div>
      <button type="button" onClick={toggle}>
        toggle
      </button>
      <button type="button" onClick={setActive}>
        set active
      </button>
      <button type="button" onClick={setInactive}>
        set inactive
      </button>
    </div>
  );
};

describe('useToggle', () => {
  it('should set the toggle state to inactive by default', () => {
    const { queryByText } = customRender(<TestComponent />);
    expect(queryByText('inactive')).toBeTruthy();
  });

  it('should allow a truthy state on init', () => {
    const { queryByText } = customRender(<TestComponent initialState={true} />);
    expect(queryByText('active')).toBeTruthy();
  });

  it('should go from inactive, to active and back again when using the toggle function', () => {
    const { queryByText } = customRender(<TestComponent />);
    expect(queryByText('inactive')).toBeTruthy();
    fireEvent.click(queryByText('toggle'));

    expect(queryByText('active')).toBeTruthy();
    fireEvent.click(queryByText('toggle'));

    expect(queryByText('inactive')).toBeTruthy();
  });

  it('should set the state to active when using the setActive function', () => {
    const { queryByText } = customRender(<TestComponent />);

    expect(queryByText('inactive')).toBeTruthy();
    fireEvent.click(queryByText('set active'));

    expect(queryByText('active')).toBeTruthy();
    // Trying to call setActive a second time should keep it active...
    fireEvent.click(queryByText('set active'));
    expect(queryByText('active')).toBeTruthy();
  });

  it('should keep the state to inactive when using the setInactive function', () => {
    const { queryByText } = customRender(<TestComponent />);

    expect(queryByText('inactive')).toBeTruthy();
    fireEvent.click(queryByText('set inactive'));

    expect(queryByText('inactive')).toBeTruthy();
    // Trying to call setInactive a second time should keep it active...
    fireEvent.click(queryByText('set inactive'));
    expect(queryByText('inactive')).toBeTruthy();
  });

  it('should set the state to inactive when using the setInactive function', () => {
    const { queryByText } = customRender(<TestComponent initialState={true} />);

    expect(queryByText('active')).toBeTruthy();
    fireEvent.click(queryByText('set inactive'));

    expect(queryByText('inactive')).toBeTruthy();
    // Trying to call setInactive a second time should keep it active...
    fireEvent.click(queryByText('set inactive'));
    expect(queryByText('inactive')).toBeTruthy();
  });
});
