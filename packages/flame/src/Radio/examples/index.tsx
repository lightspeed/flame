import * as React from 'react';
import { Box, Flex } from '../../Core';
import { Radio } from '../index';

class RadioWrapper extends React.Component<{ action: Function }, { checked: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ checked: !prevState.checked }));
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { action } = this.props;
    const value = event.target.value;

    this.setState(() => ({ checked: value === 'yes' }), () => action(value));
  }

  render() {
    return (
      <Flex flexDirection="row">
        <Box mr={2} mb={1}>
          <Radio
            id="yes"
            label="Yes"
            checked={this.state.checked}
            value="yes"
            onChange={this.handleChange}
          />
        </Box>
        <Radio
          id="no"
          label="No"
          checked={!this.state.checked}
          value="no"
          onChange={this.handleChange}
        />
      </Flex>
    );
  }
}

(RadioWrapper as any).defaultProps = {
  action: () => {},
};

export default RadioWrapper;
