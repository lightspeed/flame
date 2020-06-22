import * as React from 'react';

import { Badge, PillBadge } from './Badge';
import { skipPercy } from '../../.storybook/utils/skip-percy';

export default {
  title: 'Components|Badge',
  component: Badge,
  subcomponents: { PillBadge },
};

const statuses = ['success', 'danger', 'info', 'important', 'warning', 'default'] as const;

export const playground = (args: any) => {
  return (
    <div>
      <h3>Badge</h3>
      <Badge {...args}>{args.type}</Badge>
      <br />
      <h3>PillBadge</h3>
      <p>Avoid using this component as it will be deprecated in the next version!</p>
      <PillBadge {...args}>{args.type}</PillBadge>
    </div>
  );
};
skipPercy(playground);

export const styles = () => (
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
    <p>Avoid using custom badges as this functionality will be deprecated!</p>
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
