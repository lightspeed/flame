import * as React from 'react';

import { Button } from '../../Button';
import { Progress } from '../Progress';

const TOTAL = 100;

type State = {
  current: number;
  total: number;
};
export default class IndeterminateProgress extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      current: 0,
      total: TOTAL,
    };

    this.handleCompleteClick = this.handleCompleteClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleCompleteClick() {
    this.setState(() => ({ current: TOTAL }));
  }

  handleResetClick() {
    this.setState(() => ({ current: 0 }));
  }

  render() {
    const { current, total } = this.state;

    return (
      <React.Fragment>
        <Progress
          type="indeterminate"
          current={current}
          total={total}
          style={{ marginBottom: '1.125rem', marginTop: '1.125rem' }}
        />
        <Button onClick={this.handleResetClick} style={{ marginRight: '0.75rem' }}>
          Reset
        </Button>{' '}
        <Button
          variant="primary"
          fill
          onClick={this.handleCompleteClick}
          disabled={current === total}
        >
          Complete
        </Button>
      </React.Fragment>
    );
  }
}
