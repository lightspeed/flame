import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import cn from 'classnames';
import { withTheme } from 'emotion-theming';

import Readme from './README.md';

import { typography, spacing, shadows, radii, transition } from './src';
import { Box } from '../flame/src/Core';

import styles from '../../stories/styles/stories.scss';
import { hex2rgba } from '../../stories/helpers/color';
import { remToPxFromString } from '../../stories/helpers/unit';
import { Grid } from '../../stories/components/grid';

const stories = storiesOf('tokens', module).addDecorator(withReadme(Readme));

const { typeface, weights, fontSizes, letterSpacings } = typography;
const { scale } = spacing;
const { outer, inner, border, innerN } = shadows;

interface ExampleWithValuesProps {
  title: React.ReactNode;
  values: any[];
  paddingTop: any;
}
const ExampleWithValues: React.FC<ExampleWithValuesProps> = ({
  title,
  values = [],
  paddingTop,
  children,
}) => (
  <Box pt={paddingTop ? 2 : undefined}>
    <Box
      className={`${styles.example__block} ${
        children ? '' : styles['example__block--full-rounded']
      }`}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {title}
        <div>
          {values.map(val => (
            <Box as="code" key={val} ml={2}>
              {val}
            </Box>
          ))}
        </div>
      </div>
    </Box>

    {children ? <div className={styles.example__code}>{children}</div> : null}
  </Box>
);

interface ColorRendererProps {
  theme: {
    colors: Record<string, string>;
  };
}
const ColorRenderer: React.FC<ColorRendererProps> = ({ theme }) => {
  const colors = theme.colors;

  return (
    <Grid cols={[2, 3, 4]}>
      {Object.keys(colors).map(value => (
        <Box
          key={value}
          pb={2}
          style={{
            minHeight: `96px`,
          }}
        >
          <Box
            as="span"
            mr={1}
            mb={1}
            style={{
              display: 'block',
              backgroundColor: colors[value],
              height: '60px',
              borderRadius: '0.1875rem',
              border: '1px solid rgba(12,13,13,0.1)',
            }}
          />
          <div>
            <code>.cr-{value}</code>
          </div>
          <Box mt={1}>
            <code>{colors[value]}</code>
          </Box>
          <Box mt={1}>
            <code>{hex2rgba(colors[value])}</code>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};
const ThemeColorRenderer = withTheme(ColorRenderer);

stories.add(
  'Colors',
  () => (
    <div>
      <ThemeColorRenderer />
    </div>
  ),
  { percy: { skip: true } },
);

stories.add(
  'Typography',
  () => (
    <div>
      <h2>Typefaces</h2>
      {Object.keys(typeface).map((className, index) => (
        <ExampleWithValues
          title={
            <div style={{ fontFamily: typeface[className] }}>
              The quick brown fox jumps over the lazy dog
            </div>
          }
          values={[`.cr-${className}`]}
          paddingTop={index > 0}
        >
          <code>font-family: {typeface[className]}</code>
        </ExampleWithValues>
      ))}
      <h2>Weights</h2>
      {Object.keys(weights).map((className, index) => (
        <ExampleWithValues
          title={
            <div style={{ fontWeight: weights[className] }}>
              The quick brown fox jumps over the lazy dog
            </div>
          }
          values={[`.cr-${className}`, `weight: ${weights[className]}`]}
          paddingTop={index > 0}
        />
      ))}

      <h2>Font Sizes</h2>
      <div className={styles.example}>
        {Object.keys(fontSizes).map((className, index) => (
          <ExampleWithValues
            title={<div style={{ fontSize: fontSizes[className] }}>Text ({className})</div>}
            values={[
              `.cr-${className}`,
              fontSizes[className],
              `${remToPxFromString(fontSizes[className])}px`,
            ]}
            paddingTop={index > 0}
          />
        ))}
      </div>

      <h2>Letter Spacing</h2>
      <div className={styles.example}>
        {Object.keys(letterSpacings).map((className, index) => (
          <ExampleWithValues
            title={
              <div style={{ letterSpacing: letterSpacings[className] }}>Text ({className})</div>
            }
            values={[
              `.cr-${className}`,
              letterSpacings[className],
              `${remToPxFromString(letterSpacings[className])}px`,
            ]}
            paddingTop={index > 0}
          />
        ))}
      </div>
    </div>
  ),

  { percy: { skip: true } },
);

stories.add(
  'Spacing',
  () => (
    <div>
      {Object.keys(scale).map(value => (
        <div key={value} className={cn(styles.example, styles[`example--col`])}>
          <div className={styles.example__block}>
            <div
              className={cn(
                styles.box,
                styles[`box--fixed`],
                styles[`block-center`],
                styles[`bg-blue-100`],
              )}
              style={{
                position: 'relative',
                borderRadius: scale[value] === 0 ? 0 : radii.values['radius-2'],
              }}
            >
              <div
                className={styles[`bg-snow`]}
                style={{
                  position: 'absolute',
                  top: scale[value],
                  left: scale[value],
                  right: scale[value],
                  bottom: scale[value],
                }}
              />
            </div>
          </div>
          <div className={cn(styles.example__code, styles['text-left'])}>
            <div>
              <code>.cr-{value}</code>
            </div>
            <div
              style={{
                marginTop: spacing.scale['spacing-1'],
              }}
            >
              <code>{scale[value] === 0 ? `${scale[value]}rem` : scale[value]}</code>
            </div>
            <div
              style={{
                marginTop: spacing.scale['spacing-1'],
              }}
            >
              <code>{remToPxFromString(scale[value])}px</code>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  { percy: { skip: true } },
);

stories.add(
  'Shadows',
  () => (
    <div>
      {Object.keys(outer).map(value => (
        <div key={value} className={cn(styles.example, styles[`example--col`])}>
          <div className={styles.example__block}>
            <div
              className={cn(
                styles.box,
                styles[`box--fixed`],
                styles[`box--borderless`],
                styles[`block-center`],
              )}
              style={{ boxShadow: outer[value] }}
            />
          </div>
          <div className={cn(styles.example__code, styles[`text-left`])}>
            <div>
              <code>.cr-{value}</code>
            </div>
            <div
              style={{
                marginTop: spacing.scale['spacing-1'],
              }}
            >
              <code>{outer[value]}</code>
            </div>
          </div>
        </div>
      ))}
      <h2>Inner</h2>
      {Object.keys(inner).map(value => (
        <div key={value} className={cn(styles.example, styles[`example--col`])}>
          <div className={styles.example__block}>
            <div
              className={cn(
                styles.box,
                styles[`box--fixed`],
                styles[`box--borderless`],
                styles[`block-center`],
              )}
              style={{ boxShadow: inner[value] }}
            />
          </div>
          <div className={cn(styles.example__code, styles[`text-left`])}>
            <div>
              <code>.cr-{value}</code>
            </div>
            <div
              style={{
                marginTop: spacing.scale['spacing-1'],
              }}
            >
              <code>{inner[value]}</code>
            </div>
          </div>
        </div>
      ))}
      {Object.keys(innerN).map(value => (
        <div key={value} className={cn(styles.example, styles[`example--col`])}>
          <div className={styles.example__block}>
            <div
              className={cn(
                styles.box,
                styles[`box--fixed`],
                styles[`box--borderless`],
                styles[`block-center`],
              )}
              style={{ boxShadow: innerN[value] }}
            />
          </div>
          <div className={cn(styles.example__code, styles[`text-left`])}>
            <div>
              <code>.cr-{value}</code>
            </div>
            <div
              style={{
                marginTop: spacing.scale['spacing-1'],
              }}
            >
              <code>{innerN[value]}</code>
            </div>
          </div>
        </div>
      ))}
      <h2>Border</h2>
      {Object.keys(border).map(value => (
        <div key={value} className={cn(styles.example, styles[`example--col`])}>
          <div className={styles.example__block}>
            <div
              className={cn(
                styles.box,
                styles[`box--fixed`],
                styles[`box--borderless`],
                styles[`block-center`],
              )}
              style={{ boxShadow: border[value] }}
            />
          </div>
          <div className={cn(styles.example__code, styles[`text-left`])}>
            <div>
              <code>.cr-{value}</code>
            </div>
            <div
              style={{
                marginTop: spacing.scale['spacing-1'],
              }}
            >
              <code>{border[value]}</code>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  { percy: { skip: true } },
);

stories.add(
  'Border Radii',
  () => (
    <div>
      {Object.keys(radii.values).map(value => (
        <div key={value} className={cn(styles.example, styles[`example--col`])}>
          <div className={styles.example__block}>
            <div
              className={cn(styles.box, styles[`box--fixed`], styles[`block-center`])}
              style={{ borderRadius: radii.values[value] }}
            />
          </div>
          <div className={cn(styles.example__code, styles[`text-left`])}>
            <div>
              <code>.cr-{value}</code>
            </div>
            <div
              style={{
                marginTop: spacing.scale['spacing-1'],
              }}
            >
              <code>{radii.values[value]}</code>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  { percy: { skip: true } },
);

stories.add(
  'Transitions',
  () => (
    <div>
      <h2>Durations</h2>
      <p>Hover boxes to see example.</p>
      {Object.keys(transition.durations).map(value => (
        <div key={value} className={cn(styles.example, styles[`example--col`])}>
          <div className={styles.example__block}>
            <div
              className={cn(
                styles.box,
                styles[`box--fixed`],
                styles[`box--animate`],
                styles[`block-center`],
              )}
              style={{ transitionDuration: transition.durations[value] }}
            />
          </div>
          <div className={cn(styles.example__code, styles[`text-left`])}>
            <div>
              <code>.cr-{value}</code>
            </div>
            <div
              style={{
                marginTop: spacing.scale['spacing-1'],
              }}
            >
              <code>{transition.durations[value]}</code>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),

  { percy: { skip: true } },
);
