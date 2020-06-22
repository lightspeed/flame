import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { Badge, PillBadge, BadgeTypes } from './Badge';
import { Badge as NextBadge } from './next';

import Readme from './README.md';

const stories = storiesOf('Components|Badge', module).addDecorator(withReadme(Readme));

const statuses: BadgeTypes[] = ['success', 'danger', 'info', 'important', 'warning', 'default'];
const nextStatuses = ['danger', 'default', 'primary', 'success', 'warning'] as const;

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

stories.add('next/Styles', () => (
  <div>
    <div className="sibling-spacing">
      {nextStatuses.map(status => (
        <NextBadge key={status} variant={status}>
          {`${status[0].toUpperCase()}${status.slice(1)}`}
        </NextBadge>
      ))}
    </div>
  </div>
));
