import * as React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { css as styledSystemCss } from '@styled-system/css';
import { Omit } from 'type-fest';

import {
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  compose,
  system,
  border as styledSystemBorder,
  BorderProps as StyledSystemBorderProps,
} from 'styled-system';
import { themeGet, flameTheme as ThemeUIFlame } from './theme-get';

import { theme as lightTheme } from './themes/oldskool';
import { theme as flameTheme } from './themes/flame';
import { theme as darkTheme } from './themes/dark';

export interface BorderProps extends StyledSystemBorderProps {
  borderTopLeftRadius?: string | number;
  borderTopRightRadius?: string | number;
  borderBottomLeftRadius?: string | number;
  borderBottomRightRadius?: string | number;
}

const borderRadii = system({
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii',
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii',
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii',
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii',
  },
});

const border = compose(
  borderRadii,
  styledSystemBorder,
);

type AsProps = { as?: string };
export type FlameBoxProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps &
  Partial<Omit<ColorProps, 'color'>> & // Fun clashing between native color prop & styled-system color prop
  AsProps;
export const Box = styled('div')<FlameBoxProps>(
  compose(
    space,
    layout,
    typography,
    color,
    flexbox,
  ),
);

export type FlameFlexProps = FlameBoxProps & FlexboxProps;
export const Flex = styled(Box)<FlameFlexProps>({
  display: 'flex',
});

const themePicker = (themeName?: string) => {
  switch (themeName) {
    case 'experimentaldark':
      return darkTheme;
    case 'oldskool':
    case 'light':
      return lightTheme;
    case 'flame':
    default:
      return flameTheme;
  }
};

export type FlameThemeProps = {
  children: React.ReactNode;
  themeName?: string;
  themeOverrides?: any;
};
const FlameTheme: React.FunctionComponent<FlameThemeProps> = ({
  children,
  themeName,
  themeOverrides,
}) => {
  const selectedTheme = themePicker(themeName);
  return <ThemeProvider theme={{ ...selectedTheme, ...themeOverrides }}>{children}</ThemeProvider>;
};

const FlameFonts: React.FunctionComponent = () => (
  <link
    href="https://fonts.googleapis.com/css?family=Lato:400,700&subset=latin-ext"
    rel="stylesheet"
  />
);

const FlameGlobalStyles: React.FunctionComponent<{ themeName?: string }> = ({ themeName }) => {
  const selectedTheme = themePicker(themeName);

  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          font-family: ${themeGet(
            'fontFamily.sans-serif',
            'Lato, Helvetica Neue, Helvetica, Arial, sans-serif',
          )({ theme: selectedTheme })};
          padding: 0;
          margin: 0;
          background-color: ${selectedTheme.colors.bodyBg};
          color: ${selectedTheme.colors.textBody};
        }
      `}
    />
  );
};

const get = (theme: object) => (path: string) => themeGet(path)({ theme });
type flameCssCallback = (get: (path: string) => any, theme: object) => object;
/**
 * flameCss
 * @description
 * Augmented version of styled-system/css with a pre-bound themeGet to safely access
 * token values
 *
 * Note:
 * Use the return type `any` for now until styled-system/css has fixed their wonky typing
 * issues with css props
 */
const flameCss = (cb: flameCssCallback): any => {
  return styledSystemCss(theme => cb(get(theme), theme));
};

export {
  lightTheme,
  flameTheme,
  FlameFonts,
  FlameTheme,
  FlameGlobalStyles,
  themeGet,
  ThemeUIFlame,
  flameCss as css,
  border,
};
