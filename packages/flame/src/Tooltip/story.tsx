import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import cn from 'classnames';

import { Tooltip, TooltipPlacement } from './Tooltip';
import { Input } from '../Input';
import Readme from './README.md';
import styles from '../../../../stories/styles/stories.scss';

const stories = storiesOf('Tooltip', module).addDecorator(withReadme(Readme));

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

stories.addWithPercyOptions('Types', { skip: true }, () => (
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
));

stories.add('Directions', () => (
  <div>
    <h3>Dark</h3>
    {placements.map(placement => (
      <div key={placement} className={cn(styles.example, styles[`example--col`])}>
        <div className={styles.example__block}>
          <Tooltip content="Tooltip" placement={placement} active>
            Trigger
          </Tooltip>
        </div>
        <div className={cn(styles.example__code, styles[`text-center`])}>{placement}</div>
      </div>
    ))}
    <h3>Light</h3>
    {placements.map(placement => (
      <div key={placement} className={cn(styles.example, styles[`example--col`])}>
        <div className={styles.example__block}>
          <Tooltip content="Tooltip" placement={placement} light active>
            Trigger
          </Tooltip>
        </div>
        <div className={cn(styles.example__code, styles[`text-center`])}>{placement}</div>
      </div>
    ))}
  </div>
));

stories.add('Overlaying Tooltip Test', () => (
  <div>
    <Tooltip content="I should be above the input" placement="bottom-start" active zIndex={3}>
      <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
        Trigger
      </a>
    </Tooltip>
    <Input label="I should be behind the tooltip" />
  </div>
));

stories.add('Tooltip within a paragraph', () => (
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
));
