import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { layout, LayoutProps } from 'styled-system';
import { Merge } from 'type-fest';

import { Text, TextProps } from '../Text';
import { Box } from '../Core';

const WrapperRadio = styled('div')`
  position: relative;
  line-height: 1rem;
`;

const Label = styled('label')`
  position: relative;
  display: inline-flex;
`;

const Checkmark = styled('div')<LayoutProps>`
  position: relative;
  width: 1rem;
  height: 1rem;
  ${layout};
  flex: 0 0 auto;
  border-radius: ${themeGet('radii.radius-circle')};
  background-color: transparent;
  border: solid 1px ${themeGet('radioStyles.border')};
  box-sizing: border-box;
  overflow: hidden;
  background: ${themeGet('radioStyles.background')};
`;

Checkmark.defaultProps = {
  width: ['18px', '16px'],
  height: ['18px', '16px'],
};

const Centermark = styled('div')<LayoutProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${layout};
  border-radius: ${themeGet('radii.radius-circle')};
  background: ${themeGet('radioStyles.background')};
`;

Centermark.defaultProps = {
  width: ['7px', '6px'],
  height: ['7px', '6px'],
};

const RadioInput = styled('input')`
  position: absolute;
  ${layout};
  top: 0;
  left: 0;
  opacity: 0;
  padding: 0;
  margin: 0;
  z-index: 1;

  &:checked + ${Checkmark} {
    background: ${themeGet('radioStyles.checked.background')};
    border-color: ${themeGet('radioStyles.checked.border')};
  }

  &:not(:checked) + ${Checkmark} > ${Centermark} {
    display: none;
  }

  &:focus + ${Checkmark} {
    box-shadow: ${themeGet('radioStyles.focus.boxShadow')};
  }

  &[disabled] + ${Checkmark} {
    opacity: 0.5;
    box-shadow: none;
  }
`;

RadioInput.defaultProps = {
  // Fun clashing between legacy props and our custom props
  // @ts-ignore
  width: ['18px', '16px'],
  // @ts-ignore
  height: ['18px', '16px'],
};

export const RadioLabel = styled(Text)`
  ${props =>
    !props.color &&
    css`
      color: ${themeGet('radioStyles.label.color')(props)};
    `}
`.withComponent('div');

RadioLabel.defaultProps = {
  fontSize: ['text', 'text-s'],
  lineHeight: 3,
  fontWeight: 'bold',
  ml: 2,
};

// Probably wondering why we add this additional wrapper?
// This is to detach the text from a specific color and instead rely on
// a color alias from the theme
const RadioDescriptionWrapper = styled(Box)`
  ${Text} {
    ${props =>
      !props.color
        ? css`
            color: ${themeGet('radioStyles.description.color')(props)};
          `
        : css`
            color: ${themeGet(`colors.${props.color}`, props.color)(props)};
          `}
  }
`;

export type RadioDescriptionProps = Merge<React.HTMLAttributes<any>, TextProps>;
export const RadioDescription: React.FC<RadioDescriptionProps> = ({
  children,
  color,
  ...restProps
}) => (
  <RadioDescriptionWrapper ml="1rem" color={color}>
    <Text as="div" size="small" ml={2} {...restProps}>
      {children}
    </Text>
  </RadioDescriptionWrapper>
);

export type RadioProps = Merge<
  React.InputHTMLAttributes<HTMLInputElement>,
  Partial<{
    /** Sets label for Radio */
    label: string | Function;
    /** Sets description text for Radio */
    description: string | Function;
    css: any;
  }>
>;
export const Radio: React.FC<RadioProps> = props => {
  const { id, label, description, checked, className, ...restProps } = props;
  const labelId = id ? `${id}-label` : null;
  const descriptionId = id ? `${id}-description` : null;
  const labelledBy = label ? labelId : null;
  const describedBy = description ? descriptionId : null;

  return (
    <WrapperRadio className={className}>
      <Label role="presentation" htmlFor={id}>
        <RadioInput
          type="radio"
          id={id}
          aria-labelledby={labelledBy}
          aria-describedby={describedBy}
          checked={checked}
          {...restProps}
        />
        <Checkmark>
          <Centermark data-testid="radio-centermark" />
        </Checkmark>
        {typeof label === 'string' && <RadioLabel id={labelId}>{label}</RadioLabel>}
        {typeof label === 'function' && label(labelId)}
      </Label>
      {typeof description === 'string' && (
        <RadioDescription id={labelId}>{description}</RadioDescription>
      )}
      {typeof description === 'function' && description(labelId)}
    </WrapperRadio>
  );
};
