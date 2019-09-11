import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Alert } from './Alert';
import Readme from './README.md';

const stories = storiesOf('Alert', module).addDecorator(withReadme(Readme));

stories.add('Story', () => {
  const alerts = ['info', 'warning', 'success', 'danger'].map(type => {
    // @ts-ignore
    const [letter, ...rest] = type;
    return (
      <Alert key={type} type={type} title={`${letter.toUpperCase().concat(rest.join(''))}`} mb={2}>
        <p className="cr-m-0">Description of alert.</p>
      </Alert>
    );
  });

  return (
    <div>
      {alerts}
      <Alert
        title="Some Title"
        onClose={() => {
          // eslint-disable-next-line no-alert
          alert('custom handler');
        }}
        mb={2}
      >
        <p className="cr-m-0">This alert uses a custom handler on the close button</p>
      </Alert>
      <Alert title="Some Title" mb={2} noCloseBtn>
        <p className="cr-m-0">This alert uses has no close button</p>
      </Alert>
    </div>
  );
});
