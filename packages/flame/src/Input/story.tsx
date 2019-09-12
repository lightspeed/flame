import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import { withReadme } from 'storybook-readme';

import { Input, BaseInput } from './Input';
import Readme from './README.md';
import { Box } from '../Core';
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
          onChange={e => this.handleChange(e)}
          onFocus={() => this.handleFocus()}
          label="Enter a number"
          status={this.state.status.type as any}
          statusMessage={this.state.status.message}
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
      <h3>Advanced test input</h3>
      <Input
        id="simple"
        label="Label"
        labelHelper={
          <Badge type="info" size="small">
            Label Helper
          </Badge>
        }
        textHelper="Text Helper"
        description="Description text"
        placeholder="Placeholder text..."
        prefix="$"
        suffix="*"
      />
    </div>

    <h2>States</h2>
    <div className={bottomSpace}>
      <Input id="default-state" placeholder="Placeholder text..." />
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
        status="valid"
        placeholder="Valid input..."
        prefix={<Icon name="customers" />}
        suffix={<Icon name="info" color="secondary" />}
      />
    </div>
    <div className={bottomSpace}>
      <Input status="warning" placeholder="Warning input..." />
    </div>
    <div className={bottomSpace}>
      <Input status="error" placeholder="Error input..." />
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
          placeholder="This is some text on an input that has an error"
          status="error"
          statusMessage="This is an error message"
        />
      </div>
    </div>
  </div>
));

stories.addWithPercyOptions('Events', { skip: true }, () => (
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
));

stories.addWithPercyOptions('Basic Input', { skip: true }, () => (
  <div>
    <p>The following examples use the BaseInput component</p>
    <Box mb={1}>
      <h3>Basic Input</h3>
      <BaseInput placeholder="basic input" />
    </Box>

    <Box mb={1}>
      <h3>With an error</h3>
      <BaseInput placeholder="basic input" type="error" />
    </Box>

    <Box mb={1}>
      <h3>Disabled State</h3>
      <BaseInput placeholder="basic input" disabled />
    </Box>

    <Box mb={1}>
      <h3>With a prefix</h3>
      <BaseInput placeholder="basic input" prefix="$" />
    </Box>
  </div>
));

const BasicInputWithRef = () => {
  const ref = React.createRef<HTMLInputElement>();
  const ref2 = React.createRef<HTMLInputElement>();
  const onChange = () => {
    console.log('Current Ref:', ref, ref2);
  };

  return (
    <div>
      <p>Check console to see the right ref</p>
      <h3>BaseInput with forwarded Ref</h3>
      <Box mb={3}>
        <BaseInput
          ref={ref}
          onChange={onChange}
          placeholder="Write some stuff here and check your console"
        />
      </Box>
      <h3>Input with forwarded Ref</h3>
      <Input
        ref={ref2}
        onChange={onChange}
        placeholder="Write some stuff here and check your console"
      />
    </div>
  );
};

stories.addWithPercyOptions('Ref Input', { skip: true }, () => (
  <div>
    <BasicInputWithRef />
  </div>
));
