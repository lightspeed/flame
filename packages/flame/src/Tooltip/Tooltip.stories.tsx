import * as React from 'react';

import { Tooltip } from './Tooltip';
import { Input } from '../Input';
import { ExampleBox } from '../../.storybook/components/ExampleBox';
import { skipPercy } from '../../.storybook/utils/skip-percy';

const placements = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'right',
] as const;

export default {
  title: 'Components|Tooltip',
  component: Tooltip,
};

export const types = () => (
  <div>
    <h3>Dark</h3>
    <Tooltip content="Tooltip">Trigger</Tooltip>
    <h3>Light</h3>
    <Tooltip content="Tooltip" light>
      Trigger
    </Tooltip>
    <h3>Interactive element</h3>
    <Tooltip content="Tooltip">
      <a href="https://www.lightspeedhq.com" rel="noopener noreferrer" target="_blank">
        Trigger
      </a>
    </Tooltip>
  </div>
);
skipPercy(types);

export const directions = () => (
  <div>
    <h3>Dark</h3>
    {placements.map(placement => (
      <ExampleBox
        key={placement}
        example={
          <Tooltip content="Tooltip" placement={placement} active>
            Trigger
          </Tooltip>
        }
        content={placement}
      />
    ))}
    <h3>Light</h3>
    {placements.map(placement => (
      <ExampleBox
        key={placement}
        example={
          <Tooltip content="Tooltip" placement={placement} light active>
            Trigger
          </Tooltip>
        }
        content={placement}
      />
    ))}
  </div>
);

export const overlayingTooltipTest = () => (
  <div>
    <Tooltip content="I should be above the input" placement="bottom-start" active zIndex={3}>
      <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
        Trigger
      </a>
    </Tooltip>
    <Input label="I should be behind the tooltip" />
  </div>
);

export const tooltipWithinAParagraph = () => (
  <p>
    <Tooltip
      as="span"
      content="I should be above the input"
      placement="bottom-start"
      active
      zIndex={3}
    >
      <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
        Trigger
      </a>
    </Tooltip>
  </p>
);
