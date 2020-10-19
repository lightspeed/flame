import * as React from 'react';
import { Badge, PillBadge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
};

const statuses = ['success', 'danger', 'info', 'important', 'warning', 'default'] as const;

export const normal = () => (
  <div>
    <h3>Normal</h3>
    <div className="sibling-spacing">
      {statuses.map(status => (
        <Badge key={status} type={status}>
          {status}
        </Badge>
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
  </div>
);

export const pill = () => (
  <div>
    <p>
      <strong>Warning!</strong> pill badges will be deprecated starting next major version!
    </p>
    <h3>Pill</h3>
    <div className="sibling-spacing">
      {statuses.map(status => (
        <PillBadge key={status} type={status}>
          {status}
        </PillBadge>
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
  </div>
);

export const custom = () => (
  <div>
    <p>
      <strong>Warning!</strong> Custom badges will be deprecated starting next major version!
    </p>
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
);
