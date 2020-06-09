import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { css } from '@styled-system/css';

import { Tooltip, TooltipPlacement } from './Tooltip';
import { Input } from '../Input';
import Readme from './README.md';

const stories = storiesOf('Components|Tooltip', module).addDecorator(withReadme(Readme));

const BoxColumn: React.FC = ({ ...restProps }) => (
  <div
    css={css({
      display: 'inline-block',
      width: '192px',
      mr: 2,
      mb: 2,
      textAlign: 'center',
    })}
    {...restProps}
  />
);

const BoxExample: React.FC = ({ ...restProps }) => (
  <div
    css={css({
      p: 2,
      borderTopLeftRadius: 'radius-1',
      borderTopRightRadius: 'radius-1',
      border: '1px solid #e1e4e5',
      backgroundColor: '#f3f3f3',
    })}
    {...restProps}
  />
);

const BoxCode: React.FC = ({ ...restProps }) => (
  <div
    css={css({
      padding: '.75rem',
      borderBottomLeftRadius: '.1875rem',
      borderBottomRightRadius: '.1875rem',
      borderLeft: '1px solid #e1e4e5',
      borderRight: '1px solid #e1e4e5',
      borderBottom: '1px solid #e1e4e5',
      background: '#fff',
    })}
    {...restProps}
  />
);

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

stories.add(
  'Types',
  () => (
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
  ),
  { percy: { skip: true } },
);

stories.add('Directions', () => (
  <div>
    <h3>Dark</h3>
    {placements.map(placement => (
      <BoxColumn key={placement}>
        <BoxExample>
          <Tooltip content="Tooltip" placement={placement} active>
            Trigger
          </Tooltip>
        </BoxExample>
        <BoxCode>{placement}</BoxCode>
      </BoxColumn>
    ))}
    <h3>Light</h3>
    {placements.map(placement => (
      <BoxColumn key={placement}>
        <BoxExample>
          <Tooltip content="Tooltip" placement={placement} light active>
            Trigger
          </Tooltip>
        </BoxExample>
        <BoxCode>{placement}</BoxCode>
      </BoxColumn>
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
