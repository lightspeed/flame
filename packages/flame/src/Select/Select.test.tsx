import * as React from 'react';

import { createComponent } from 'test-utils';

import { Select } from './Select';

describe('Select', () => {
  it('renders correctly', () => {
    const component = createComponent(
      <Select id="select-id" name="select-name">
        <option value="1">Option 1</option>
        <option value="2" disabled>
          Option 2 (disabled)
        </option>
        <option value="3">Option 3</option>
        <optgroup label="Option group">
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </optgroup>
      </Select>,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
