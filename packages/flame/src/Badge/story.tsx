import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Badge, PillBadge, BadgeTypes } from './Badge';
import Readme from './README.md';

const stories = storiesOf('Badge', module).addDecorator(withReadme(Readme));

const statuses: BadgeTypes[] = ['success', 'danger', 'info', 'important', 'warning', 'default'];

stories.add('Styles', () => (
  <div>
    <h3>Normal</h3>
    <div className="sibling-spacing">
      {statuses.map(status => (
        <Badge key={status} type={status}>
          {status}
        </Badge>
      ))}
    </div>
    <h3>Pill</h3>
    <div className="sibling-spacing">
      {statuses.map(status => (
        <PillBadge key={status} type={status}>
          {status}
        </PillBadge>
      ))}
    </div>
    <h3>Small</h3>
    <div className="sibling-spacing">
      {statuses.map(status => (
        <Badge key={status} type={status} size="small">
          {status}
        </Badge>
      ))}
    </div>
    <h3>Small Pill</h3>
    <div className="sibling-spacing">
      {statuses.map(status => (
        <PillBadge key={status} type={status} size="small">
          {status}
        </PillBadge>
      ))}
    </div>
    <h3>Custom Badges</h3>
    <div className="sibling-spacing">
      <Badge bg="green-300" color="green-100">
        Custom Badge
      </Badge>
      <Badge size="small" bg="blue-300" color="blue-100">
        Custom Small Badge
      </Badge>
    </div>
  </div>
));
