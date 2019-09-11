import * as React from 'react';
import { Select } from '../Select';

export default class SelectExample extends React.Component<any, { selected: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    // Since the event is synthetic, we need to hold a reference to it before
    // passing it to `setState()`.
    const { value } = event.currentTarget;
    this.setState(() => ({ selected: value }));
  }

  render() {
    return <Select onChange={this.handleChange} value={this.state.selected} {...this.props} />;
  }
}
