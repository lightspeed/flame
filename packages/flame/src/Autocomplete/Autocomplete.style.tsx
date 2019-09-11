import { themeGet } from '@styled-system/theme-get';
import { Styles, styleFn } from 'react-select/lib/styles';
import { Merge } from 'type-fest';

import CLASS_NAME from './autocomplete-classname';

type FlameStyle = Merge<Styles, { valueContainer?: styleFn }>;

const flameStyle = (theme: any): FlameStyle => {
  const get = (path: string) => themeGet(path)({ theme });

  const style: FlameStyle = {
    control: (styles, { isDisabled, isFocused }) => ({
      ...styles,
      backgroundColor: isDisabled
        ? get('inputStyles.disabled.background')
        : get('inputStyles.background'),
      borderColor: isFocused
        ? get('inputStyles.focus.border')
        : get('inputStyles.autocomplete.border'),
      borderRadius: get('radii.radius-1'),
      fontFamily: get('fontFamily.sans-serif'),
      fontSize: get('fontSizes.text-s'),
      color: get('inputStyles.color'),
      minHeight: get('fontSizes.text-xxl'),
      boxShadow: get('innerShadows.0'),
      ':hover': {
        borderColor: isFocused
          ? get('inputStyles.focus.border')
          : get('inputStyles.autocomplete.controlHover.border'),
      },
      [`.${CLASS_NAME}--error &`]: {
        borderColor: isFocused ? get('inputStyles.focus.border') : get('inputStyles.error.border'),
      },
      [`.${CLASS_NAME}--error & .${CLASS_NAME}__dropdownIndicator`]: {
        fill: !isFocused && get('inputStyles.error.color'),
      },
    }),
    option: (styles, { isSelected, isFocused, isDisabled }) => {
      let optionColor = get('inputStyles.color');
      let optionBackgroundColor = get('inputStyles.background');
      let optionCursor = 'default';

      if (isSelected) {
        optionColor = get('inputStyles.autocomplete.optionSelected.color');
        optionBackgroundColor = get('inputStyles.autocomplete.optionSelected.background');
      } else if (isFocused) {
        optionBackgroundColor = get('inputStyles.autocomplete.optionSelected.background');
      } else if (isDisabled) {
        optionColor = get('inputStyles.disabled.color');
        optionBackgroundColor = get('inputStyles.disabled.background');
        optionCursor = 'not-allowed';
      }

      return {
        ...styles,
        color: optionColor,
        backgroundColor: optionBackgroundColor,
        cursor: optionCursor,
        fontFamily: get('fontFamily.sans-serif'),
        fontSize: get('fontSizes.text-s'),
        minHeight: get('fontSizes.text-xxl'),
        lineHeight: get('fontSizes.text-l'),
        padding: `${get('space.1')} ${get('space.2')}`,
        display: 'inline-flex',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
        wordBreak: 'break-word',
        wordWrap: 'break-word',
        borderBottom: `1px solid ${get('inputStyles.border')}`,
        boxShadow: 'none',
        ':active': {
          color: optionColor,
          backgroundColor: optionBackgroundColor,
        },
        ':first-of-type': {
          borderTopLeftRadius: get('radii.radius-2'),
          borderTopRightRadius: get('radii.radius-2'),
        },
        ':last-child': {
          borderBottomLeftRadius: get('radii.radius-2'),
          borderBottomRightRadius: get('radii.radius-2'),
          borderBottom: 'none',
        },
        [`& .${CLASS_NAME}__create`]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          color: get('inputStyles.focus.border'),
          '& > span': {
            fontWeight: get('fontWeights.bold'),
            paddingLeft: get('space.1'),
          },
        },
      };
    },
    placeholder: styles => ({
      ...styles,
      color: get('inputStyles.placeholder.color'),
    }),
    noOptionsMessage: styles => ({
      ...styles,
      fontFamily: get('fontFamily.sans-serif'),
      fontSize: get('fontSizes.text-s'),
      color: get('inputStyles.color'),
      textAlign: 'left',
    }),
    indicatorsContainer: (styles, { isDisabled }) => ({
      ...styles,
      opacity: isDisabled ? 0.35 : 1,
      cursor: 'pointer',
      color: get('inputStyles.autocomplete.indicator.color'),
      [`& div:hover .${CLASS_NAME}__clearIndicator`]: {
        fill: get('inputStyles.error.color'),
      },
    }),
    menu: styles => ({
      ...styles,
      borderRadius: get('radii.radius-2'),
      boxShadow: `${get('borderShadows.0')}, ${get('shadows.3')}`,
      marginTop: get('space.1'),
      overflow: 'hidden',
    }),
    menuList: styles => ({
      ...styles,
      padding: 0,
    }),
    multiValue: (styles, { isDisabled }) => ({
      ...styles,
      color: get('inputStyles.autocomplete.multiValue.color'),
      backgroundColor: isDisabled
        ? get('inputStyles.autocomplete.multiValue.backgroundDisabled')
        : get('inputStyles.autocomplete.multiValue.background'),
      border: isDisabled
        ? `1px solid ${get('inputStyles.autocomplete.multiValue.borderDisabled')}`
        : `1px solid ${get('inputStyles.autocomplete.multiValue.border')}`,
      minHeight: get('fontSizes.text-xl'),
      ':hover': {
        cursor: 'pointer',
      },
    }),
    multiValueLabel: (styles, { isDisabled }) => ({
      ...styles,
      color: isDisabled
        ? get('inputStyles.autocomplete.multiValueLabel.colorDisabled')
        : get('inputStyles.autocomplete.multiValueLabel.color'),
      whiteSpace: 'normal',
    }),
    multiValueRemove: (styles, { isDisabled }) => ({
      ...styles,
      color: isDisabled
        ? get('inputStyles.autocomplete.multiValueRemove.colorDisabled')
        : get('inputStyles.autocomplete.multiValueRemove.color'),
      ':hover': {
        background: 'none',
      },
    }),
  };

  return style;
};

export default flameStyle;
