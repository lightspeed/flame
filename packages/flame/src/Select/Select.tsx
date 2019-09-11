import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = styled('select')`
  width: 100%;
  color: ${themeGet('selectStyles.color')};
  font-size: ${themeGet('fontSizes.text-s')};
  font-family: ${themeGet('fontFamily.sans-serif')};
  font-weight: ${themeGet('fontWeights.bold')};
  height: ${themeGet('space.6')};
  padding: 0 ${themeGet('space.4')} 0 ${themeGet('space.2')};
  background-color: ${themeGet('selectStyles.backgroundColor')};
  border: 1px solid ${themeGet('selectStyles.border')};
  border-radius: ${themeGet('radii.radius-1')};
  line-height: ${themeGet('space.3')};
  /* stylelint-disable declaration-colon-newline-after  */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='%23494c4c'%3E%3Cg id='chevron-up-down'%3E%3Cpath id='base-1' d='M8 12l2-2 1 1-3 3-3-3 1-1 2 2zm0-8L6 6 5 5l3-3 3 3-1 1-2-2z'/%3E%3C/g%3E%3C/svg%3E"),
    ${themeGet('selectStyles.background')};
  /* stylelint-enable */
  appearance: none;
  background-repeat: no-repeat;
  background-position: right ${themeGet('space.1')} center, center;
  z-index: 2;

  &:focus {
    outline: none;
    border-color: ${themeGet('selectStyles.focusBorder')};
  }

  &:disabled {
    color: ${themeGet('selectStyles.disabledColor')};
    background-color: ${themeGet('selectStyles.disabledBackground')};
    box-shadow: none;
    opacity: 0.5;
  }

  /* IE 11 fix to remove default dropdown arrow */
  &::-ms-expand {
    display: none;
  }

  /* Firefox fix to remove inner outline on focus
  // https://twitter.com/sarasoueidan/status/720890849748480002 */
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 ${themeGet('selectStyles.color')};
  }
`;
