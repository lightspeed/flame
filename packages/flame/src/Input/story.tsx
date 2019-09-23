import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import { Input } from './Input';
import Readme from './README.md';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Box } from '../Core';
import { Icon } from '../Icon';

const stories = storiesOf('Input', module).addDecorator(withReadme(Readme));

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
    <Box mb={3}>
      <h3>Simple text input</h3>
      <Input id="simple" label="Label" placeholder="Placeholder text..." />
    </Box>
    <Box mb={3}>
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
    </Box>

    <h2>States</h2>
    <Box mb={3}>
      <Input placeholder="Placeholder text..." />
    </Box>
    <Box mb={3}>
      <Input placeholder="Hover input..." />
    </Box>
    <Box mb={3}>
      <Input placeholder="Focus input..." />
    </Box>
    <Box mb={3}>
      <Input readOnly value="Readonly input" />
    </Box>
    <Box mb={3}>
      <Input disabled placeholder="Disabled input..." />
    </Box>
    <Box mb={3}>
      <Input
        prefix={<Icon name="customers" color="textHeading" />}
        suffix={<Icon name="info" color="secondary" />}
        status={{ type: 'valid' }}
        placeholder="Valid input..."
      />
    </Box>
    <Box mb={3}>
      <Input status={{ type: 'warning' }} placeholder="Warning input..." />
    </Box>
    <Box mb={3}>
      <Input status={{ type: 'error' }} placeholder="Error input..." />
    </Box>

    <div>
      <h2>Size</h2>
      <Box mb={3}>
        <Input size="small" placeholder="Small input..." />
      </Box>
      <Box mb={3}>
        <Input placeholder="Normal input..." />
      </Box>
      <Box mb={3}>
        <Input size="large" placeholder="Large input..." />
      </Box>
    </div>

    <div>
      <h2>Input Error Text</h2>
      <Box mb={3}>
        <Input
          value="This is some text on an input that has an error"
          status={{ type: 'error', message: 'This is an error message' }}
        />
      </Box>
    </div>
  </div>
));

stories.add(
  'Events',
  () => (
    <div>
      <Box mb={3}>
        <Input
          placeholder="Input with onChange event (see Action Logger)"
          onChange={firstArgAction('onChange')}
        />
      </Box>
      <Box mb={3}>
        <Input
          placeholder="Input with onFocus & onBlur events (see Action Logger)"
          onFocus={action('onFocus')}
          onBlur={action('onBlur')}
        />
      </Box>
      <Box mb={3}>
        <InputWrapper />
      </Box>
    </div>
  ),
  { percy: { skip: true } },
);
