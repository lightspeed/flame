import * as React from 'react';

import { Badge } from './Badge';

export default {
  title: 'Components/Badge/next-badge',
  component: Badge,
};

const statuses = ['danger', 'default', 'primary', 'success', 'warning'] as const;

export const types = () => (
  <div>
    <div className="sibling-spacing">
      {statuses.map(status => (
        <Badge key={status} variant={status}>
          {`${status[0].toUpperCase()}${status.slice(1)}`}
        </Badge>
      ))}
    </div>
  </div>
);
