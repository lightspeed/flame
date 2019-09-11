import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { space, color, compose, BackgroundColorProps, SpaceProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

type CardCommonProps = {
  theme?: any;
  /** Sets more padding */
  large?: boolean;
  /** Disables default padding */
  noSpacing?: boolean;
} & BackgroundColorProps &
  SpaceProps & {
    css?: any;
    as?: any;
  };

const setSectionSizingProp = (props: CardCommonProps) => {
  if (props.large) {
    return css`
      padding: ${themeGet('space.4')(props)};
    `;
  } else if (props.noSpacing) {
    return css`
      padding: 0;
    `;
  }

  return '';
};

export type CardSectionProps = CardCommonProps;
export const CardSection = styled('div')<CardSectionProps>`
  color: ${themeGet('colors.gray')};
  ${compose(
    color,
    space,
  )};
  ${setSectionSizingProp};
`;

CardSection.defaultProps = {
  pt: 2,
  pb: 2,
  pl: 2,
  pr: 2,
};

const setHeaderSizingProp = (props: CardCommonProps) => {
  if (props.large) {
    return css`
      padding: 0 ${themeGet('space.4')(props)};
    `;
  } else if (props.noSpacing) {
    return css`
      padding: 0;
    `;
  }

  return '';
};

const BaseCardHeader = styled(CardSection)<CardCommonProps>`
  line-height: ${themeGet('space.3')};
  border-bottom: 1px solid ${themeGet('cardStyles.header.border')};
  ${setHeaderSizingProp};
`;

BaseCardHeader.defaultProps = {
  px: 2,
  py: 0,
  color: 'textHeading',
};

const setFooterSizingProp = (props: CardCommonProps) => {
  if (props.large) {
    return css`
      padding: ${themeGet('space.2')(props)} ${themeGet('space.4')(props)};
    `;
  } else if (props.noSpacing) {
    return css`
      padding: 0;
    `;
  }

  return '';
};

export type CardFooterProps = CardCommonProps;
export const CardFooter = styled(CardSection)<CardFooterProps>`
  line-height: ${themeGet('space.3')};
  border-top: 1px solid ${themeGet('cardStyles.footer.border')};
  ${setFooterSizingProp};
`;

CardFooter.defaultProps = {
  pt: 2,
  pb: 2,
  pl: 2,
  pr: 2,
};

const TitleActionWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled('div')`
  font-size: ${themeGet('fontSizes.text')};
  font-weight: ${themeGet('fontWeights.bold')};
  padding-top: ${themeGet('space.2')};
  padding-bottom: ${themeGet('space.2')};
`;

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement> &
  CardCommonProps & {
    /** Sets CardHeader title */
    title?: string;
    /** Sets top-right actions on CardHeader */
    actions?: React.ReactNode;
    children?: React.ReactNode;
  };

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  actions,
  children,
  ...restProps
}) => (
  <BaseCardHeader {...restProps}>
    <TitleActionWrapper>
      <Title>{title}</Title>
      {actions && <div>{actions}</div>}
    </TitleActionWrapper>
    {children}
  </BaseCardHeader>
);

const setCardVariant = (props: { top?: boolean }) => {
  if (props.top) {
    return css`
      box-shadow: ${themeGet('cardVariants.top.boxShadow')(props)};
    `;
  }
  return css`
    box-shadow: ${themeGet('cardVariants.neutral.boxShadow')(props)};
  `;
};

const setCardSizingProp = (props: CardCommonProps) => {
  if (props.large) {
    return css`
      ${BaseCardHeader}, ${CardFooter} {
        padding-left: ${themeGet('space.4')(props)};
        padding-right: ${themeGet('space.4')(props)};
      }

      ${CardSection} {
        padding: ${themeGet('space.4')(props)};
      }
    `;
  } else if (props.noSpacing) {
    return css`
      ${BaseCardHeader}, ${CardFooter} {
        padding-left: 0;
        padding-right: 0;
      }

      ${CardSection} {
        padding: 0;
      }
    `;
  }

  return '';
};

export type CardProps = BackgroundColorProps &
  Partial<{
    theme: any;
    /** Sets elevation of Card on the Z axis */
    top: boolean;
    /** Sets more padding */
    large: boolean;
    /** Disables default padding */
    noSpacing: boolean;
  }>;

export const Card = styled('div')<CardProps>`
  border-radius: ${themeGet('radii.radius-2')};
  font-family: ${themeGet('fontFamily.sans-serif')};
  background-color: ${themeGet('cardStyles.background')};

  > :first-of-type {
    border-top-left-radius: calc(${themeGet('radii.radius-2')} - 1px);
    border-top-right-radius: calc(${themeGet('radii.radius-2')} - 1px);
  }

  > :last-child {
    border-bottom-left-radius: calc(${themeGet('radii.radius-2')} - 1px);
    border-bottom-right-radius: calc(${themeGet('radii.radius-2')} - 1px);
  }

  ${setCardVariant};
  ${color};
  ${setCardSizingProp};
`;
