import { shadows } from '../shadows';
import { colors } from '../colors';

const inputStyles: InputStyles = {
  background: colors.white,
  color: colors.textBody,
  border: colors['gray-200'],
  // @ts-ignore
  boxShadow: shadows.inner['inner-shadow-1'],
  placeholder: {
    color: colors['gray-400'],
  },
  hover: {
    border: colors['gray-300'],
  },
  active: {
    border: colors['blue-500'],
  },
  disabled: {
    color: colors['gray-400'],
    background: colors['gray-50'],
  },
  focus: {
    border: colors['blue-500'],
  },
  helper: {
    background: colors['gray-800'],
  },
  warning: {
    color: colors['orange-500'],
  },
  error: {
    border: colors.danger,
    color: colors.danger,
  },
  valid: {
    color: colors.primary,
  },
  readonly: {
    color: colors.textBody,
    background: colors['gray-50'],
  },
  label: {
    color: colors.textBody,
  },
  autofilled: {
    background: colors.white,
    color: colors.textBody,
  },
  autocomplete: {
    border: colors['gray-200'],
    controlDropdownIndicator: {
      color: colors['gray-50'],
    },
    controlHover: {
      border: colors['gray-300'],
    },
    indicator: {
      color: colors['gray-200'],
    },
    optionSelected: {
      background: colors['gray-50'],
      color: colors.textBody,
    },
    multiValue: {
      color: colors.textBody,
      background: colors.white,
      backgroundDisabled: colors.white,
      border: colors['gray-100'],
      borderDisabled: colors['gray-100'],
    },
    multiValueLabel: {
      color: colors.textBody,
      colorDisabled: colors['gray-800'],
    },
    multiValueRemove: {
      color: '',
      colorDisabled: colors['gray-1000'],
    },
  },
};

export { inputStyles };
