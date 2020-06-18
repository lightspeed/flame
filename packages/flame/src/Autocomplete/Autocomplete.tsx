import * as React from 'react';
import ReactSelect, {
  AsyncCreatable as ReactSelectAsyncCreatable,
  Async as ReactSelectAsync,
  Creatable as ReactSelectCreatable,
  makeAnimated as Animated,
} from 'react-select';

// Need to drill to get the right types as they are not included in the final build.
import { Props as BaseSelectProps } from 'react-select/lib/Select';
import { Props as BaseCreatableProps } from 'react-select/lib/Creatable';
import { Props as BaseAsyncProps } from 'react-select/lib/Async';

import { withTheme } from 'emotion-theming';

import { Spinner } from '../Spinner';
import { IconSmallChevronDown } from '../Icon/SmallChevronDown';
import { IconSmallChevronUp } from '../Icon/SmallChevronUp';
import { IconCross } from '../Icon/Cross';
import { IconAdd } from '../Icon/Add';

import flameStyle from './Autocomplete.style';

import CLASS_NAME from './autocomplete-classname';

export type OptionType = { label: string; value: string };

function DropdownIndicator(props: any) {
  const {
    selectProps: { menuIsOpen },
    getStyles,
    innerProps,
  } = props;
  const styles = getStyles('dropdownIndicator', props);
  const commonProps = {
    color: 'gray-300',
    size: '1rem',
    className: `${CLASS_NAME}__dropdownIndicator`,
  };

  return (
    <div {...innerProps} style={styles}>
      {menuIsOpen ? (
        <IconSmallChevronUp {...commonProps} />
      ) : (
        <IconSmallChevronDown {...commonProps} />
      )}
    </div>
  );
}

type ClearIndicatorProps = {
  getStyles: Function;
  innerProps: {
    ref: any;
  };
  children: React.ReactChild;
};
function ClearIndicator(props: ClearIndicatorProps) {
  const {
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  const styles = getStyles('clearIndicator', props);
  const {
    children = (
      <IconCross className={`${CLASS_NAME}__clearIndicator`} color={styles.color} size="0.625rem" />
    ),
  } = props;

  return (
    <div {...restInnerProps} ref={ref} style={styles}>
      {children}
    </div>
  );
}

function formatCreateLabel(label: React.ReactNode) {
  return (
    <div className={`${CLASS_NAME}__create`}>
      <IconAdd color="secondary" />
      <span>{label}</span>
    </div>
  );
}

const customComponents = {
  DropdownIndicator,
  ClearIndicator,
  IndicatorSeparator: (): null => null,
  LoadingIndicator: ({ isFocused }: { isFocused?: boolean }) => (
    <Spinner size="large" color={isFocused ? 'gray-300' : 'gray-200'} baseColor2="gray-300" />
  ),
};

export type AsyncProps = {
  theme?: any;
  loadOptions: any;
} & BaseAsyncProps<OptionType>;
function Async(props: AsyncProps) {
  const { components, theme, ...rest } = props;
  return (
    <ReactSelectAsync
      components={{
        ...customComponents,
        ...components,
      }}
      styles={flameStyle(theme)}
      {...rest}
    />
  );
}

export type AsyncCreatableProps = {
  theme?: any;
} & BaseAsyncProps<OptionType> &
  BaseCreatableProps<OptionType>;
function AsyncCreatable(props: AsyncCreatableProps) {
  const { components, theme, ...rest } = props;
  return (
    <ReactSelectAsyncCreatable
      components={{
        ...customComponents,
        ...components,
      }}
      styles={flameStyle(theme)}
      {...rest}
    />
  );
}

export type CreatableProps = {
  theme?: any;
} & BaseCreatableProps<OptionType>;
function Creatable(props: CreatableProps) {
  const { components, theme, ...rest } = props;
  return (
    <ReactSelectCreatable
      components={{
        ...customComponents,
        ...components,
      }}
      styles={flameStyle(theme)}
      {...rest}
    />
  );
}

export type AutocompleteProps = {
  theme?: any;
  hasError?: boolean;
} & BaseSelectProps;
const Select = (props: AutocompleteProps) => {
  const { hasError, components, theme, ...rest } = props;

  return (
    <ReactSelect
      className={hasError ? `${CLASS_NAME} ${CLASS_NAME}--error` : CLASS_NAME}
      classNamePrefix={CLASS_NAME}
      components={{
        ...customComponents,
        ...components,
      }}
      hasError={hasError}
      styles={flameStyle(theme)}
      {...rest}
    />
  );
};

/**
 * Select/Autocomplete component built on top of [react-select](https://react-select.com).
 *
 * Be aware that this component is using an older version or react-select (v2).
 *
 * For a complete listing of all its props, please consult `react-select`'s [documentation](https://react-select.com/props).
 *
 * This particular component is subject to future change, as we're too tightly coupled to
 * react-select and its integration. Not to mention that this is not actually a "real autocomplete"
 * solution. Using this as a "search autocomplete" à la google is not recommended.
 */
const StyledSelect = withTheme(Select);

const AsyncWithTheme = withTheme(Async);
const AsyncCreatableWithTheme = withTheme(AsyncCreatable);
const CreatableWithTheme = withTheme(Creatable);

export {
  Animated,
  AsyncWithTheme as Async,
  AsyncCreatableWithTheme as AsyncCreatable,
  CreatableWithTheme as Creatable,
  StyledSelect as Select,
  formatCreateLabel,
};
