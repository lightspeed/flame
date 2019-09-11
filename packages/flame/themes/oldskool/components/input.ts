import { rgba } from 'polished';
import { colors } from '../colors';
import { shadows } from '../shadows';

const inputStyles: InputStyles = {
  background: colors.snow,
  color: colors.gray,
  border: colors['gray-100'],
  // @ts-ignore
  boxShadow: shadows.inner['inner-shadow-1'],
  placeholder: {
    color: colors['gray-200'],
  },
  hover: {
    border: colors['seal-100'],
  },
  active: {
    border: colors.blue,
  },
  disabled: {
    color: colors['gray-300'],
    background: colors['snow-200'],
  },
  focus: {
    border: colors.blue,
  },
  helper: {
    background: colors['gray-300'],
  },
  warning: {
    color: colors.orange,
  },
  error: {
    border: colors['maple-200'],
    color: colors['maple-200'],
  },
  valid: {
    color: colors.green,
  },
  readonly: {
    color: colors.gray,
    background: colors['snow-200'],
  },
  label: {
    color: colors.night,
  },
  autofilled: {
    background: colors['yellow-100'],
    color: colors.night,
  },
  autocomplete: {
    border: colors['gray-200'],
    controlDropdownIndicator: {
      color: colors['gray-300'],
    },
    controlHover: {
      border: colors['gray-300'],
    },
    indicator: {
      color: colors['gray-300'],
    },
    optionSelected: {
      background: colors['snow-200'],
      color: colors.night,
    },
    multiValue: {
      color: colors.blue,
      background: rgba(colors.blue, 0.08),
      backgroundDisabled: colors['snow-100'],
      border: rgba(colors.blue, 0.24),
      borderDisabled: colors['snow-300'],
    },
    multiValueLabel: {
      color: colors.blue,
      colorDisabled: colors['night-100'],
    },
    multiValueRemove: {
      color: colors.blue,
      colorDisabled: colors.night,
    },
  },
};

export { inputStyles };
