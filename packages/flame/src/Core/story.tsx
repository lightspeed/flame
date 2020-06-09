import * as React from 'react';
import { css } from '@styled-system/css';
import { withTheme } from 'emotion-theming';

import { Box } from './index';
import { Alert } from '../Alert';
import { Divider } from '../Divider';

function hex2rgba(hex: string) {
  const colorCode = hex.replace('#', '');
  const r = parseInt(colorCode.substring(0, colorCode.length / 3), 16);
  const g = parseInt(colorCode.substring(colorCode.length / 3, (2 * colorCode.length) / 3), 16);
  const b = parseInt(
    colorCode.substring((2 * colorCode.length) / 3, (3 * colorCode.length) / 3),
    16,
  );

  return `rgb(${r}, ${g}, ${b})`;
}

const BoxExampleGrid: React.FC = ({ ...rest }) => (
  <div
    css={
      // @ts-ignore
      css({
        display: 'grid',
        gridGap: '20px',
        gridTemplateColumns: `repeat(auto-fit, minmax(186px, 200px));`,
      })
    }
    {...rest}
  />
);

export default {
  title: 'Theme|Tokens',
};

const Colours = withTheme(({ theme }) => {
  const colors = theme.colors;

  return (
    <div
      css={css({
        display: 'grid',
        gridTemplateColumns: [2, 3, 4].map(cols => `repeat(${cols}, auto)`),
      })}
    >
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
    </div>
  );
});
export const colours = () => <Colours />;
colours.story = { percy: { skip: true } };

const TypographyExample: React.FC<{ output: React.ReactNode; example: React.ReactNode }> = ({
  output,
  example,
}) => (
  <div
    css={css({
      borderRadius: 'radius-1',
      border: '1px solid',
      borderColor: 'disabled',
      mb: 2,
      background: '#f3f3f3',
      overflow: 'hidden',
    })}
  >
    <Box p={2}>{output}</Box>
    <Box px={2} py={1} bg="white">
      <pre>{example}</pre>
    </Box>
  </div>
);
const Typography = withTheme(({ theme }) => {
  const { fontFamily, fontWeights, fontSizes, letterSpacings } = theme;
  return (
    <div>
      <h2>Typefaces</h2>
      {Object.entries(fontFamily as Record<string, string>).map(([key, value]) => (
        <TypographyExample
          key={key}
          output={
            <Box p={2} css={css({ fontFamily: key })}>
              The quick brown fox jumps over the lazy dog
            </Box>
          }
          example={
            <React.Fragment>
              font-family: {value}
              <br />
              {`themeGet('fontFamily.${key}')`}
              <br />
              {`css({ fontFamily: '${key}'})`}
            </React.Fragment>
          }
        />
      ))}
      <h2>Weights</h2>
      {Object.entries(fontWeights as Record<string, string>).map(([key, value]) => (
        <TypographyExample
          key={key}
          output={
            <Box p={2} css={css({ fontWeight: key })}>
              The quick brown fox jumps over the lazy dog
            </Box>
          }
          example={
            <React.Fragment>
              font-weight: {value}
              <br />
              {`themeGet('fontWeights.${key}')`}
              <br />
              {`css({ fontWeights: '${key}'})`}
            </React.Fragment>
          }
        />
      ))}

      <h2>Font Sizes</h2>
      {Object.entries(fontSizes as Record<string, string>)
        .filter(([key]) => key !== '' && key.includes('text'))
        .map(([key, value]) => (
          <TypographyExample
            key={key}
            output={
              <Box p={2} css={css({ fontSize: key })}>
                Text ({key})
              </Box>
            }
            example={
              <React.Fragment>
                font-size: {value}
                <br />
                {`themeGet('fontSizes.${key}')`}
                <br />
                {`css({ fontSizes: '${key}'})`}
              </React.Fragment>
            }
          />
        ))}

      <h2>Letter Spacing</h2>
      {Object.entries(letterSpacings as Record<string, string>).map(([key, value]) => (
        <TypographyExample
          key={key}
          output={
            <Box p={2} css={css({ letterSpacing: key })}>
              The quick brown fox jumps over the lazy dog
            </Box>
          }
          example={
            <React.Fragment>
              letter-spacing: {value}
              <br />
              {`themeGet('letterSpacings.${key}')`}
              <br />
              {`css({ letterSpacings: '${key}'})`}
            </React.Fragment>
          }
        />
      ))}
    </div>
  );
});
export const typography = () => <Typography />;
typography.story = { percy: { skip: true } };

const BoxExample: React.FC<{ box: React.ReactNode; sample: React.ReactNode }> = ({
  box,
  sample,
}) => (
  <div
    css={css({
      border: '1px solid',
      borderColor: 'disabled',
      borderRadius: 'radius-1',
    })}
  >
    <div
      css={css({
        p: 2,
        borderBottom: '1px solid',
        borderColor: 'disabled',
      })}
    >
      <div
        className="sb-example-box"
        css={css({
          position: 'relative',
          width: '130px',
          height: '130px',
          margin: '0 auto',
          borderRadius: 'radius-1',
        })}
      >
        {box}
      </div>
    </div>
    <div css={css({ px: 1, py: 2, bg: 'white', overflow: 'scroll' })}>
      <pre>{sample}</pre>
    </div>
  </div>
);
const Spacing = withTheme(({ theme }) => {
  const { space } = theme;
  return (
    <div
      css={
        // @ts-ignore
        css({
          '.sb-example-box': {
            bg: 'blue-100',
          },
        })
      }
    >
      <BoxExampleGrid>
        {(space as string[]).map((value, index) => (
          <BoxExample
            key={value}
            box={
              <div
                css={css({
                  position: 'absolute',
                  bg: 'white',
                  top: value,
                  bottom: value,
                  left: value,
                  right: value,
                })}
              >
                &nbsp;
              </div>
            }
            sample={
              <React.Fragment>
                {value}/{value && parseFloat(value.replace('rem', '')) * 16}px
                <br />
                {`themeGet('space.${index}')`}
                <br />
                {`css({p: ${index}})`}
                <br />
                {`css({m: ${index}})`}
              </React.Fragment>
            }
          />
        ))}
      </BoxExampleGrid>
    </div>
  );
});
export const spacing = () => <Spacing />;
spacing.story = { percy: { skip: true } };

const Shadows = withTheme(({ theme }) => {
  const { shadows, innerShadows, innerShadowsN, borderShadows } = theme;

  return (
    <div>
      <h2>Box Shadows</h2>
      <BoxExampleGrid>
        {Object.entries(shadows as Record<string, string>).map(([key, value]) => (
          <BoxExample
            key={key}
            box={
              <div css={css({ width: '100%', height: '100%', bg: 'white', boxShadow: key })}>
                &nbsp;
              </div>
            }
            sample={
              <React.Fragment>
                box-shadow: {value};
                <br />
                {`themeGet('shadows${key}')`}
                <br />
                {`css({boxShadow: '${key}'})`}
              </React.Fragment>
            }
          />
        ))}
      </BoxExampleGrid>
      <Divider mt={4} mb={4} />
      <Alert type="warning" title="Heads Up!" noCloseBtn css={css({ my: 2 })}>
        The properties below are subject to change. Please avoid using them.
      </Alert>
      <h2>Inner</h2>
      <BoxExampleGrid>
        {Object.entries(innerShadows as Record<string, string>).map(([key, value]) => (
          <BoxExample
            key={key}
            box={
              <div
                css={css(theme => ({
                  width: '100%',
                  height: '100%',
                  bg: 'white',
                  boxShadow: theme.innerShadows[key],
                }))}
              >
                &nbsp;
              </div>
            }
            sample={
              <React.Fragment>
                box-shadow: {value};
                <br />
                {`themeGet('innerShadows.${key}')`}
                <br />
                {`css(theme => ({boxShadow: 'theme.innerShadows.${key}'}))`}
              </React.Fragment>
            }
          />
        ))}
      </BoxExampleGrid>
      <h2>InnerN</h2>
      <BoxExampleGrid>
        {Object.entries(innerShadowsN as Record<string, string>).map(([key, value]) => (
          <BoxExample
            key={key}
            box={
              <div
                css={css(theme => ({
                  width: '100%',
                  height: '100%',
                  bg: 'white',
                  boxShadow: theme.innerShadowsN[key],
                }))}
              >
                &nbsp;
              </div>
            }
            sample={
              <React.Fragment>
                box-shadow: {value};
                <br />
                {`themeGet('innerShadowsN.${key}')`}
                <br />
                {`css(theme => ({boxShadow: 'theme.innerShadowsN.${key}'}))`}
              </React.Fragment>
            }
          />
        ))}
      </BoxExampleGrid>
      <h2>Border</h2>
      <BoxExampleGrid>
        {Object.entries(borderShadows as Record<string, string>).map(([key, value]) => (
          <BoxExample
            key={key}
            box={
              <div
                css={css(theme => ({
                  width: '100%',
                  height: '100%',
                  bg: 'white',
                  boxShadow: theme.borderShadows[key],
                }))}
              >
                &nbsp;
              </div>
            }
            sample={
              <React.Fragment>
                box-shadow: {value};
                <br />
                {`themeGet('borderShadows.${key}')`}
                <br />
                {`css(theme => ({boxShadow: 'theme.borderShadows.${key}'}))`}
              </React.Fragment>
            }
          />
        ))}
      </BoxExampleGrid>
    </div>
  );
});

export const shadows = () => <Shadows />;
shadows.story = { percy: { skip: true } };

const BorderRadii = withTheme(({ theme }) => {
  const { radii } = theme;
  return (
    <BoxExampleGrid>
      {Object.entries(radii as Record<string, string>).map(([key, value]) => (
        <BoxExample
          key={key}
          box={
            <div
              css={css({
                width: '100%',
                height: '100%',
                bg: 'white',
                border: '1px solid',
                borderColor: 'disabled',
                borderRadius: key,
              })}
            >
              &nbsp;
            </div>
          }
          sample={
            <React.Fragment>
              border-radius: {value};
              <br />
              {`themeGet('radii.${key}')`}
              <br />
              {`css({ borderRadius: '${key}'}))`}
            </React.Fragment>
          }
        />
      ))}
    </BoxExampleGrid>
  );
});
export const radii = () => <BorderRadii />;
radii.story = { percy: { skip: true } };

const Transitions = withTheme(({ theme }) => {
  const { transition } = theme;

  return (
    <div>
      <h2>Durations</h2>
      <p>Hover boxes to see example</p>
      <BoxExampleGrid>
        {Object.entries(transition as Record<string, string>).map(([key, value]) => (
          <BoxExample
            key={key}
            box={
              <div
                css={css(theme => ({
                  width: '100%',
                  height: '100%',
                  bg: 'white',
                  transition: 'background ease-in-out',
                  transitionDuration: theme.transition[key],
                  '&:hover': {
                    backgroundColor: 'primary',
                  },
                }))}
              >
                &nbsp;
              </div>
            }
            sample={
              <React.Fragment>
                transition-duration: {value};
                <br />
                {`themeGet('transition.${key}')`}
                <br />
                {`css(theme => ({ transitionDuration: theme.transition['${key}']})))`}
              </React.Fragment>
            }
          />
        ))}
      </BoxExampleGrid>
    </div>
  );
});
export const transitions = () => <Transitions />;
transitions.story = { percy: { skip: true } };
