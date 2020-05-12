import * as React from 'react';

import { IconWarning } from '../Icon/Warning';
import { IconInfo } from '../Icon/Info';
import { IconDanger } from '../Icon/Danger';
import { IconVerified } from '../Icon/Verified';

interface AlertIcons {
  type: 'info' | 'success' | 'warning' | 'danger' | string;
}
const AlertIcons: React.FC<AlertIcons> = ({ type }) => {
  if (type === 'info') {
    return <IconInfo />;
  }

  if (type === 'success') {
    return <IconVerified />;
  }

  if (type === 'warning') {
    return <IconWarning />;
  }

  if (type === 'danger') {
    return <IconDanger />;
  }

  return null;
};

export { AlertIcons };
