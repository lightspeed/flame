import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import { Input } from './Input';
import Readme from './README.md';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Icon } from '../Icon';

import spacing from '../../../flame-tokens/partials/_spacing.scss';

const stories = storiesOf('Input', module).addDecorator(withReadme(Readme));

const bottomSpace = spacing[`cr-mb-3`];

const firstArgAction = decorateAction([(args: any) => [args[0].target.value]]);

type State = {
  status: {
    type?: 'error' | 'valid' | 'warning';
    message?: string;
  };
  input: any;
};
class InputWrapper extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      status: {},
      input: '',
    };
  }

  handleClick() {
    if (!this.state.input || Number.isNaN(parseFloat(this.state.input))) {
      this.setState({ status: { type: 'error', message: 'Please enter a valid number' } });
    } else if (this.state.input < 10) {
      this.setState({ status: { type: 'warning', message: 'You can do more than 10!' } });
    } else {
      this.setState({ status: { type: 'valid', message: 'Good job!' } });
    }
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    this.setState({ input: target.value });
  }

  handleFocus() {
    this.setState({ status: {} });
  }

  render() {
    return (
      <div>
        <Input
          placeholder="Input with error message..."
          id="error"
          label="Enter a number"
          status={this.state.status}
          onChange={e => this.handleChange(e)}
          onFocus={() => this.handleFocus()}
        />
        <br />
        <Button onClick={() => this.handleClick()}>Submit</Button>
      </div>
    );
  }
}

stories.add('Story', () => (
  <div>
    <div className={bottomSpace}>
      <h3>Simple text input</h3>
      <Input id="simple" label="Label" placeholder="Placeholder text..." />
    </div>
    <div className={bottomSpace}>
      <h3>Advanced text input</h3>
      <Input
        placeholder="Placeholder text..."
        prefix="$"
        suffix="*"
        id="username"
        label="Label"
        description="Description text"
        labelHelper={
          <Badge type="info" size="small">
            label helper
          </Badge>
        }
        textHelper="Text helper"
      />
    </div>

    <h2>States</h2>
    <div className={bottomSpace}>
      <Input placeholder="Placeholder text..." />
    </div>
    <div className={`${bottomSpace}`}>
      <Input placeholder="Hover input..." />
    </div>
    <div className={`${bottomSpace}`}>
      <Input placeholder="Focus input..." />
    </div>
    <div className={bottomSpace}>
      <Input readOnly value="Readonly input" />
    </div>
    <div className={bottomSpace}>
      <Input disabled placeholder="Disabled input..." />
    </div>
    <div className={bottomSpace}>
      <Input
        prefix={<Icon name="customers" color="textHeading" />}
        suffix={<Icon name="info" color="secondary" />}
        status={{ type: 'valid' }}
        placeholder="Valid input..."
      />
    </div>
    <div className={bottomSpace}>
      <Input status={{ type: 'warning' }} placeholder="Warning input..." />
    </div>
    <div className={bottomSpace}>
      <Input status={{ type: 'error' }} placeholder="Error input..." />
    </div>

    <div>
      <h2>Size</h2>
      <div className={bottomSpace}>
        <Input size="small" placeholder="Small input..." />
      </div>
      <div className={bottomSpace}>
        <Input placeholder="Normal input..." />
      </div>
      <div className={bottomSpace}>
        <Input size="large" placeholder="Large input..." />
      </div>
    </div>

    <div>
      <h2>Input Error Text</h2>
      <div className={bottomSpace}>
        <Input
          value="This is some text on an input that has an error"
          status={{ type: 'error', message: 'This is an error message' }}
        />
      </div>
    </div>
  </div>
));

stories.add(
  'Events',
  () => (
    <div>
      <div className={bottomSpace}>
        <Input
          placeholder="Input with onChange event (see Action Logger)"
          onChange={firstArgAction('onChange')}
        />
      </div>
      <div className={bottomSpace}>
        <Input
          placeholder="Input with onFocus & onBlur events (see Action Logger)"
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </div>
      <div className={bottomSpace}>
        <InputWrapper />
      </div>
    </div>
  ),
  { percy: { skip: true } },
);
