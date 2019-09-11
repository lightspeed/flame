import * as React from 'react';
import { customRender } from 'test-utils';

import { AnnotatedLayout } from '../index';

describe('<AnnotatedLayout />', () => {
  it('renders the right structure', () => {
    const { getByText } = customRender(
      <AnnotatedLayout
        title="My Annotated Title"
        description="Some description"
        renderExtras={
          <div>
            <button type="button">Some Button</button>
          </div>
        }
      >
        <div>My Content</div>
      </AnnotatedLayout>,
    );

    expect(getByText('My Annotated Title')).toBeTruthy();
    expect(getByText('Some description')).toBeTruthy();
    expect(getByText('My Content')).toBeTruthy();
    expect(getByText('Some Button')).toBeTruthy();
  });
});
