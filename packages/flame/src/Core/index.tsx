import * as React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
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
import { theme as houstonTheme } from './themes/houston';
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

const border = compose(borderRadii, styledSystemBorder);

type AsProps = { as?: string };
export type FlameBoxProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps &
  Partial<Omit<ColorProps, 'color'>> & // Fun clashing between native color prop & styled-system color prop
  AsProps;
export const Box = styled('div')<FlameBoxProps>(compose(space, layout, typography, color, flexbox));

export type FlameFlexProps = FlameBoxProps & FlexboxProps;
export const Flex = styled(Box)<FlameFlexProps>({
  display: 'flex',
});

export const themePicker = (themeName?: string) => {
  switch (themeName) {
    case 'experimentaldark':
      return darkTheme;
    case 'oldskool':
    case 'light':
      return lightTheme;
    case 'flame':
      return flameTheme;
    default:
      return houstonTheme;
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

// WARNING!
// This component will be deprecated in v3. Instead, use the link tag directly:
// https://github.com/lightspeed/flame#link-fonts
const FlameFonts: React.FunctionComponent = () => (
  <link href="//vendfrontendassets.freetls.fastly.net/fonts/fonts-v2.css" rel="stylesheet" />
);

const FlameGlobalStyles: React.FunctionComponent<{ themeName?: string }> = () => {
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
        html {
          font-size: 15px;
        }
      `}
    />
  );
};

export {
  lightTheme,
  houstonTheme,
  flameTheme,
  FlameFonts,
  FlameTheme,
  FlameGlobalStyles,
  themeGet,
  ThemeUIFlame,
  border,
};
