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
      cursor: 'text',
      color: 'var(--vd-colour--text)',
      wordBreak: 'normal',
      width: '100%',
      margin: '0',
      padding: '0.3666666667rem 12px',
      boxSizing: 'border-box',
      outline: 'none',
      boxShadow: isFocused ? '0 0 3px var(--vd-colour--go)' : 'none',
      backgroundColor: isDisabled
        ? get('inputStyles.disabled.background')
        : 'var(--vd-colour--box)',
      border: isFocused ? '2px solid var(--vd-colour--go)' : '2px solid var(--vd-colour--framing)',
      borderRadius: '4px',
      transition: 'all 0.2s',
      transitionProperty: 'border-color, box-shadow',
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
    multiValue: (_styles, { isDisabled }) => ({
      display: 'flex',
      wordBreak: 'break-word',
      margin: '0',
      fontSize: '15px',
      lineHeight: '1.33333',
      fontWeight: 400,
      padding: '6px 10px',
      color: 'var(--vd-colour--text-action)',
      backgroundColor: isDisabled ? 'var(--vd-colour--keyline)' : 'var(--vd-colour--supplementary)',
      borderRadius: '4px',
      marginRight: '5px',
      marginTop: '2px',
      marginBottom: '1px',
      ':hover': {
        cursor: 'pointer',
      },
    }),
    multiValueLabel: (_styles, { isDisabled }) => ({
      color: isDisabled
        ? get('inputStyles.autocomplete.multiValueLabel.colorDisabled')
        : 'var(--vd-colour--text-action)',
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
    valueContainer: styles => ({
      ...styles,
      padding: '0',
    }),
  };

  return style;
};

export default flameStyle;
