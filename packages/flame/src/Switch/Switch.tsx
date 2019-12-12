import * as React from 'react';
import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { Merge } from 'type-fest';
import { IconCheckmark } from '../Icon/Checkmark';
import { IconCross } from '../Icon/Cross';

const SwitchWrapper = styled('span')`
  display: flex;
  justify-content: space-between;
  width: ${themeGet('space.8')};
  height: ${themeGet('space.4')};
  box-sizing: border-box;
  border: solid 1px ${themeGet('switchStyles.off.border')};
  border-radius: ${themeGet('space.2')};
  background: ${themeGet('switchStyles.off.background')};
  transition-property: background;
  transition-duration: ${themeGet('transition.transition-duration-slow')};
  transition-timing-function: cubic-bezier(0.68, 1.46, 0.1, 1.06);
`;

const WrapperLabel = styled('label')`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const SwitchSlider = styled('span')`
  display: flex;
  justify-content: center;
  align-self: center;
  position: absolute;
  top: calc(${themeGet('space.1')} / 2);
  width: calc(${themeGet('space.4')} - ${themeGet('space.1')});
  height: calc(${themeGet('space.4')} - ${themeGet('space.1')});
  margin: 0 2px;
  box-sizing: border-box;
  border: solid 1px ${themeGet('switchStyles.slider.border')};
  border-radius: ${themeGet('radii.radius-circle')};
  background: ${themeGet('switchStyles.slider.background')};
  z-index: 2;
  box-shadow: ${themeGet('switchStyles.slider.shadow')};
  transition-property: translateX(0);
  transition-duration: ${themeGet('transition.transition-duration-slow')};
  transition-timing-function: cubic-bezier(0.68, 1.46, 0.1, 1.06);
`;

const Svg = styled('svg')`
  align-self: center;
`;

const SwitchSliderIcon = () => (
  <Svg width="10" height="2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 .505C0 .226.232 0 .5 0c.276 0 .5.214.5.505v.99A.508.508 0 0 1 .5 2a.495.495 0 0 1-.5-.505v-.99zm3 0C3 .226 3.232 0 3.5 0c.276 0 .5.214.5.505v.99A.508.508 0 0 1 3.5 2a.495.495 0 0 1-.5-.505v-.99zm3 0C6 .226 6.232 0 6.5 0c.276 0 .5.214.5.505v.99A.508.508 0 0 1 6.5 2a.495.495 0 0 1-.5-.505v-.99zm3 0C9 .226 9.232 0 9.5 0c.276 0 .5.214.5.505v.99A.508.508 0 0 1 9.5 2a.495.495 0 0 1-.5-.505v-.99z"
      fill="#C4CACC"
      fillRule="evenodd"
    />
  </Svg>
);

const SwitchInput = styled('input')`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 3;
  cursor: pointer;

  &:checked + ${SwitchWrapper} {
    background: ${themeGet('switchStyles.on.background')};
    border-color: ${themeGet('switchStyles.on.checkedBorder')};

    ${SwitchSlider} {
      transform: translateX(1.5rem);
      border-color: ${themeGet('switchStyles.on.border')};
    }
  }

  &:focus + ${SwitchWrapper} {
    box-shadow: 0 0 0 1pt ${themeGet('switchStyles.on.color')},
      0 0 0 3pt ${themeGet('switchStyles.on.background')};
  }

  &:disabled {
    cursor: default;

    & + ${SwitchWrapper} {
      opacity: 0.5;
    }
  }
`;

const IconWrapper = styled('span')`
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 100%;
  margin: 0 ${themeGet('space.1')};
  z-index: 1;
`;

const Checkmark = styled(IconCheckmark)`
  fill: ${themeGet('switchStyles.icons.checkmarkBackground')};
`;

const Cross = styled(IconCross)`
  fill: ${themeGet('switchStyles.icons.crossBackground')};
`;

export type SwitchProps = Merge<
  React.HTMLProps<HTMLInputElement>,
  {
    css?: any;
    /** CSS class name to apply to the wrapper component */
    className?: string;
    /** Sets the checked state of Switch */
    checked?: boolean;
  }
>;
/**
 * A toggleable control which stays on (or off) until manually triggered once more.
 */
export const Switch: React.FC<SwitchProps> = ({ className, checked, ...restProps }) => (
  <WrapperLabel role="presentation" className={className}>
    <SwitchInput type="checkbox" checked={checked} value={checked ? 1 : 0} {...restProps} />
    <SwitchWrapper>
      <SwitchSlider>
        <SwitchSliderIcon />
      </SwitchSlider>
      <IconWrapper>
        <Checkmark size="0.75rem" />
        <Cross size="0.75rem" />
      </IconWrapper>
    </SwitchWrapper>
  </WrapperLabel>
);
