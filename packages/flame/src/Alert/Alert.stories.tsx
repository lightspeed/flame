import * as React from 'react';
import { Alert } from './Alert';

import { Box } from '../Core';

export default {
  title: 'Components/Alert',
  component: Alert,
};

const alertTypes = ['info', 'warning', 'success', 'danger'];

export const types = () => {
  return (
    <div>
      <h2>Alert Types</h2>
      {alertTypes.map(type => {
        return (
          <Box key={type} mb={2}>
            <Alert type={type} title={`${type[0].toUpperCase().concat(type.slice(1))}`}>
              Description of alert.
            </Alert>
          </Box>
        );
      })}
      <h2>Alert Types (no close button)</h2>
      {alertTypes.map(type => {
        return (
          <Box key={type} mb={2}>
            <Alert
              key={type}
              type={type}
              title={`${type[0].toUpperCase().concat(type.slice(1))}`}
              noCloseBtn
            >
              Description of alert with no close button.
            </Alert>
          </Box>
        );
      })}
    </div>
  );
};
