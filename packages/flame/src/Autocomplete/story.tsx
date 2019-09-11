import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';
import cn from 'classnames';

import Autocomplete, { exampleProps, exampleItems } from './examples';

import Readme from './README.md';
import typography from '../../../flame-tokens/partials/_typography.scss';
import spacing from '../../../flame-tokens/partials/_spacing.scss';

const stories = storiesOf('Autocomplete', module).addDecorator(withReadme(Readme));

function onCreateOption(value: any, currentItems: any) {
  const newOption = {
    label: value,
    value: value.toLowerCase().replace(/\W/g, ''),
  };

  action('onCreateSuccess')(value);

  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          options: [...currentItems, newOption].sort(),
          value: newOption,
        }),
      1000,
    );
  });
}

function onCreateOptionError(value: any) {
  return new Promise((_, reject) =>
    setTimeout(() => {
      action('onCreateError')(value);
      return reject();
    }, 1000),
  );
}

function caseInsensitiveUnique({ option, options }: { option: any; options: any }) {
  const matchRegex = new RegExp(`^${option.label}`, 'i');
  const match = options.filter(
    (item: any) => typeof item.label === 'string' && item.label.search(matchRegex) !== -1,
  );
  return match.length === 0;
}

stories.addWithPercyOptions('Story', { skip: true }, () => (
  <div>
    <h3>Important note</h3>
    <p>
      This component is a wrapper on top of react-select. Please refer to the{' '}
      <a href="https://github.com/JedWatson/react-select" target="_blank" rel="noopener noreferrer">
        react-select
      </a>{' '}
      documentation for all available functionalities.
    </p>

    <h3>Default</h3>
    <div>
      <Autocomplete {...exampleProps} />
    </div>

    <h3>With Label</h3>
    <div className={spacing['cr-mb-1']}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor="color-input-label"
        className={[typography['cr-bold'], typography['cr-text-s']].join(' ')}
      >
        Label *
      </label>
    </div>
    <Autocomplete
      {...exampleProps}
      inputProps={{ id: 'color-input-label', name: 'color-input-label' }}
    />

    <h3>Creatable</h3>
    <Autocomplete {...exampleProps} onCreate={onCreateOption} />

    <h3>Dropdown-like (searchable disabled)</h3>
    <Autocomplete {...exampleProps} isSearchable={false} />

    <h3>Multiple selection</h3>
    <Autocomplete {...exampleProps} isMulti />

    <h3>With custom optionRenderer</h3>
    <Autocomplete
      {...exampleProps}
      components={{
        Option: (props: any) => {
          const { children, isFocused, isSelected, innerRef, innerProps } = props;

          return (
            <i
              ref={innerRef}
              {...innerProps}
              style={{
                display: 'block',
                color: isFocused || isSelected ? 'red' : 'blue',
                padding: '.5rem 1rem',
                border: '1px solid',
              }}
            >
              {children}
            </i>
          );
        },
      }}
    />
  </div>
));

stories.add('States', () => (
  <div>
    <h3>Default</h3>
    <div>
      <Autocomplete {...exampleProps} />
    </div>

    <h3>With Label</h3>
    <div className={spacing['cr-mb-1']}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor="color-input-label"
        className={cn(typography['cr-bold'], typography['cr-text-s'])}
      >
        Label *
      </label>
    </div>
    <Autocomplete
      {...exampleProps}
      inputProps={{ id: 'color-input-label', name: 'color-input-label' }}
    />

    <h3>With value</h3>
    <Autocomplete {...exampleProps} initialValue={exampleItems[6]} />

    <h3>With long value</h3>
    <Autocomplete {...exampleProps} initialValue={exampleItems[1]} />

    <h3>Disabled</h3>
    <Autocomplete {...exampleProps} initialValue={exampleItems[0]} isDisabled />

    <h3>Disabled Multiple</h3>
    <Autocomplete
      {...exampleProps}
      initialValue={[exampleItems[0], exampleItems[3], exampleItems[4]]}
      isDisabled
      isMulti
    />

    <h3>Loading</h3>
    <Autocomplete {...exampleProps} isLoading />

    <h3>Error</h3>
    <Autocomplete hasError {...exampleProps} />

    <h3>autoFocus & openOnFocus</h3>
    <div style={{ marginBottom: '220px' }}>
      <Autocomplete {...exampleProps} initialValue={exampleItems[0]} autoFocus openMenuOnFocus />
    </div>

    <h3>Blur when selection made</h3>
    <Autocomplete {...exampleProps} blurInputOnSelect />
  </div>
));

stories.addWithPercyOptions('Events', { skip: true }, () => (
  <div>
    <h3>onChange (see action logger)</h3>
    <p>
      This method is required to update the value as react-select requires it (Note that (as of 1.0)
      you must handle the change and pass the updated value to the Select.) See the{' '}
      <a href="https://react-select.com/home" target="_blank" rel="noopener noreferrer">
        usage
      </a>{' '}
      documentation.
    </p>
    <Autocomplete {...exampleProps} onChange={action('onChange')} />

    <h3>onFocus (see action logger)</h3>
    <Autocomplete {...exampleProps} onFocus={action('onFocus')} />

    <h3>onBlur (see action logger)</h3>
    <Autocomplete {...exampleProps} onBlur={action('onBlur')} />

    <h3>onCreateOption success (see action logger)</h3>
    <Autocomplete {...exampleProps} onCreate={onCreateOption} />

    <h3>onCreateOption error (see action logger)</h3>
    <Autocomplete {...exampleProps} onCreate={onCreateOptionError} />

    <h3>
      onCreateOption with custom isOptionUnique - case insensitive as an example (see action logger)
    </h3>
    <Autocomplete
      {...exampleProps}
      onCreate={onCreateOption}
      isOptionUnique={caseInsensitiveUnique}
    />
  </div>
));
