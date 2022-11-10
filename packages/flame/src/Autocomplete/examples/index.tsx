import React, { Component } from 'react';
import { Props as BaseSelectProps } from 'react-select/src/Select';
import { Autocomplete, Creatable, formatCreateLabel } from '../index';
import { OptionType } from '../Autocomplete';

export const exampleItems: OptionType[] = [
  { value: '1', label: 'Red' },
  {
    value: '2',
    label:
      'Color value with a really really really really long label with a really really really really long label',
  },
  {
    value: '3',
    label: 'ReallyReallyReallyReallyReallyReallyReallyReallyLongWord',
  },
  { value: '4', label: 'Blue' },
  { value: '5', label: 'Black' },
  { value: '6', label: 'Gray' },
  { value: '7', label: 'Yellow' },
];

export const exampleProps = {
  name: 'color-input',
  placeholder: 'Choose a color',
  inputId: 'color-input',
  initialOptions: exampleItems,
  isClearable: true,
  formatCreateLabel: (label: Pick<OptionType, 'label'>) =>
    formatCreateLabel(<span>Add &ldquo;{label}&rdquo;</span>),
};

type Props = {
  initialValue?: any;
  initialOptions?: OptionType[] | string;
  isLoading?: boolean;
  onCreate?: (newOption: any, options: any) => Promise<any>;
} & BaseSelectProps;
type State = {
  value: any;
  options: OptionType[] | string;
  isLoading: boolean;
  error: boolean;
};
class ExampleAutocomplete extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: this.props.initialValue || '',
      options: this.props.initialOptions || [],
      isLoading: this.props.isLoading || false,
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewOptionClick = this.handleNewOptionClick.bind(this);
  }

  handleChange(value: any) {
    this.setState({ value, error: false });
  }

  handleInputChange(value: any) {
    this.setState({ error: false });
    return value;
  }

  handleNewOptionClick(newOption: any) {
    const { onCreate } = this.props;
    const { options } = this.state;

    this.setState({ isLoading: true });
    onCreate(newOption, options)
      .then(data => {
        this.setState(() => ({
          isLoading: false,
          options: data.options,
          value: data.value,
        }));
      })
      .catch(() => {
        this.setState(() => ({
          isLoading: false,
          error: true,
        }));
      });
  }

  render() {
    const { value, options, isLoading, error } = this.state;
    const { onCreate, ...rest } = this.props;

    const SelectComponent = onCreate ? Creatable : Autocomplete;

    return (
      <SelectComponent
        options={options}
        value={value}
        isLoading={isLoading}
        hasError={error}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onCreateOption={this.handleNewOptionClick}
        maxMenuHeight={180}
        {...rest}
      />
    );
  }
}

export default ExampleAutocomplete;
