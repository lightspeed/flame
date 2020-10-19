import { css } from '@emotion/core';
import styled from '@emotion/styled';
import {
  typography,
  color,
  space,
  system,
  fontWeight,
  TypographyProps,
  ColorProps,
  WidthProps,
  SpaceProps,
  compose,
} from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

type TextTransformProp = {
  /** Sets textTransform on Text */
  textTransform?: string;
};

const textTransform = system({
  textTransform: true,
});
const width = system({
  width: {
    property: 'width',
    scale: 'sizes',
  },
});

export type TextProps = TypographyProps &
  ColorProps &
  TextTransformProp &
  WidthProps &
  SpaceProps & {
    /** Theme size for Text */
    size?: 'small' | 'normal' | 'large' | 'xlarge';
    css?: any;
    as?: any;
    color?: string;
  };

const BaseText = styled('div')<TextProps>(
  {
    margin: 0,
  },
  compose(space, width, color, typography),
  fontWeight,
  textTransform,
);

const setSizeFonts = (props: Partial<TextProps>) => {
  if (props.fontSize) {
    return '';
  }

  switch (props.size) {
    case 'small':
      return css`
        font-size: ${themeGet('fontSizes.small')(props)};
      `;
    case 'large':
      return css`
        font-size: ${themeGet('fontSizes.large')(props)};
      `;
    case 'xlarge':
      return css`
        font-size: ${themeGet('fontSizes.xlarge')(props)};
      `;
    case 'normal':
    default:
      return '';
  }
};

const setSizeLineHeight = (props: Partial<TextProps>) => {
  if (props.lineHeight) {
    return '';
  }

  switch (props.size) {
    case 'small':
      return css`
        line-height: ${themeGet('lineHeights.3')(props)};
      `;
    case 'large':
      return css`
        line-height: ${themeGet('lineHeights.5')(props)};
      `;
    case 'xlarge':
      return css`
        line-height: ${themeGet('lineHeights.6')(props)};
      `;
    case 'normal':
      return css`
        line-height: ${themeGet('lineHeights.4')(props)};
      `;
    default:
      return '';
  }
};

/**
 * The essence of written communication, beautifully styled for all your legibility needs.
 * Basic text component that contains utility properties to adjust typographic styling
 */
export const Text = styled('p')<TextProps>(
  {
    margin: 0,
  },
  compose(space, width, color, typography),
  setSizeFonts,
  setSizeLineHeight,
  fontWeight,
  textTransform,
);
Text.defaultProps = {
  className: 'fl-text',
};

/**
 * Pre-styled h1 component
 */
export const Heading1 = styled(BaseText)<TextProps>`
  font-size: ${themeGet('fontSizes.xxlarge')};
  line-height: ${themeGet('lineHeights.9')};
`.withComponent('h1');

Heading1.defaultProps = {
  ...BaseText.defaultProps,
  fontWeight: 'bold',
  color: 'textHeading',
  className: 'fl-heading1',
};

/**
 * Pre-styled h2 component
 */
export const Heading2 = styled(BaseText)<TextProps>`
  font-size: ${themeGet('fontSizes.xlarge')};
  line-height: ${themeGet('lineHeights.6')};
`.withComponent('h2');

Heading2.defaultProps = {
  ...BaseText.defaultProps,
  fontWeight: 'bold',
  color: 'textHeading',
  className: 'fl-heading2',
};

/**
 * Pre-styled h3 component
 */
export const Heading3 = styled(BaseText)<TextProps>`
  font-size: ${themeGet('fontSizes.large')};
  line-height: ${themeGet('lineHeights.5')};
`.withComponent('h3');

Heading3.defaultProps = {
  ...BaseText.defaultProps,
  fontWeight: 'bold',
  color: 'textHeading',
  className: 'fl-heading3',
};

/**
 * Pre-styled h4 component
 */
export const Heading4 = styled(BaseText)<TextProps>`
  font-size: ${themeGet('fontSizes.xsmall')};
  line-height: ${themeGet('lineHeights.3')};
  text-transform: uppercase;
`.withComponent('h4');

Heading4.defaultProps = {
  ...BaseText.defaultProps,
  fontWeight: 'bold',
  color: 'textHeading',
  letterSpacing: 3,
  className: 'fl-heading4',
};

const textlinkColor = (props: any) =>
  props.color
    ? themeGet(`colors.${props.color}`, props.color)(props)
    : themeGet('textStyles.link.color')(props);

/**
 * Pre-styled anchor component
 */
export const TextLink = styled(Text)<TextProps>`
  color: ${textlinkColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: ${textlinkColor};
  }
  ${color};
`.withComponent('a');
TextLink.defaultProps = {
  className: 'fl-textlink',
};

export const TextContent = styled('div')`
  .fl-text:not(:last-child),
  .fl-textlink:not(:last-child) {
    margin-bottom: ${themeGet('space.3')};
  }

  .fl-heading1:not(:last-child),
  .fl-heading2:not(:last-child) {
    margin-bottom: ${themeGet('space.2')};
  }

  .fl-heading3:not(:last-child),
  .fl-heading4:not(:last-child) {
    margin-bottom: ${themeGet('space.1')};
  }

  .fl-text:not(:first-of-type),
  .fl-textlink:not(:first-of-type),
  .fl-heading1:not(:first-of-type),
  .fl-heading2:not(:first-of-type),
  .fl-heading3:not(:first-of-type),
  .fl-heading4:not(:first-of-type) {
    padding-top: ${themeGet('space.1')};
  }
`;
