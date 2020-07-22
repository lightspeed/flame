import * as React from 'react';

import { Input } from './Input';

import { Box } from '../Core';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Icon } from '../Icon';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'on change' },
    onFocus: { action: 'on focus' },
    onBlur: { action: 'on blur' },
  },
};

const InputWrapper = () => {
  const [state, setState] = React.useState<{
    status: {
      type?: 'error' | 'valid' | 'warning';
      message?: string;
    };
    input: any;
  }>({
    status: {},
    input: '',
  });

  const handleClick = () => {
    if (
      !state.input ||
      (typeof state.input === 'string' && Number.isNaN(parseFloat(state.input)))
    ) {
      setState(prevState => ({
        ...prevState,
        status: { type: 'error', message: 'Please enter a valid number' },
      }));
    } else if (state.input < 10) {
      setState(prevState => ({
        ...prevState,
        status: { type: 'warning', message: 'You can do more than 10!' },
      }));
    } else {
      setState(prevState => ({ ...prevState, status: { type: 'valid', message: 'Good job!' } }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setState(prevState => ({ ...prevState, input: target.value }));
  };

  const handleFocus = () => {
    setState(prevState => ({ ...prevState, status: {} }));
  };

  return (
    <div>
      <Input
        placeholder="Input with error message..."
        id="error"
        onChange={handleChange}
        onFocus={handleFocus}
        label="Enter a number"
        status={state.status.type as any}
        statusMessage={state.status.message}
      />
      <br />
      <Button onClick={() => handleClick()}>Submit</Button>
    </div>
  );
};

export const story = () => (
  <div>
    <Box mb={3}>
      <h3>Simple text input</h3>
      <Input id="simple" label="Label" placeholder="Placeholder text..." />
    </Box>
    <Box mb={3}>
      <h3>Advanced text input</h3>
      <Input
        id="advanced"
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
        status="valid"
        placeholder="Valid input..."
        prefix={<Icon name="customers" />}
        suffix={<Icon name="info" color="secondary" />}
      />
    </Box>
    <Box mb={3}>
      <Input status="warning" placeholder="Warning input..." />
    </Box>
    <Box mb={3}>
      <Input status="error" placeholder="Error input..." />
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
          placeholder="This is some text on an input that has an error"
          status="error"
          statusMessage="This is an error message"
        />
      </Box>
    </div>
    <div>
      <h2>Input Error Text (using the legacy API)</h2>
      <Box mb={3}>
        <Input
          placeholder="This is some text on an input that has an error"
          status={{ type: 'error', message: 'This is an error message' }}
        />
      </Box>
    </div>
  </div>
);

export const events: React.FC<{
  onChange: () => void;
  onFocus: () => void;
  onBlur: () => void;
}> = ({ onChange, onFocus, onBlur }) => (
  <div>
    <Box mb={3}>
      <Input placeholder="Input with onChange event (see Action Logger)" onChange={onChange} />
    </Box>
    <Box mb={3}>
      <Input
        placeholder="Input with onFocus & onBlur events (see Action Logger)"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Box>
    <Box mb={3}>
      <InputWrapper />
    </Box>
  </div>
);
