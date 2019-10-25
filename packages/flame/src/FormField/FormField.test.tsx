import * as React from 'react';
import { customRender } from 'test-utils';
import { Label } from './FormField';

describe('Label', () => {
  it('displays a label and a description', () => {
    const { queryByText } = customRender(<Label description="some description">my label</Label>);

    expect(queryByText('my label')).toBeTruthy();
    expect(queryByText('some description')).toBeTruthy();
  });

  it('displays only a label', () => {
    const { queryByText } = customRender(<Label>my label</Label>);

    expect(queryByText('my label')).toBeTruthy();
    expect(queryByText('some description')).toBeFalsy();
  });
});
