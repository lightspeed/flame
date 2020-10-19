import * as React from 'react';

import { Tooltip, TooltipPlacement } from './Tooltip';

import { Input } from '../Input';
import { ExampleBox } from '../../../../.storybook/components/ExampleBox';
import {
  disableChromaticSnapshots,
  disableDocsStory,
} from '../../../../.storybook/story-modifiers';
import { overlayingPopoverTest } from '../Popover/Popover.stories';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

const placements: TooltipPlacement[] = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'right',
];

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
disableChromaticSnapshots(types);

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
disableDocsStory(directions);

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
disableDocsStory(overlayingPopoverTest);

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
disableDocsStory(tooltipWithinAParagraph);
