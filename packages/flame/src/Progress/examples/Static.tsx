import * as React from 'react';

import { Button } from '../../Button';
import { Progress } from '../Progress';

const STEP = 20;
const TOTAL = 100;

type State = {
  current: number;
  total: number;
};
export default class StaticProgress extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      current: STEP,
      total: TOTAL,
    };

    this.handleStepClick = this.handleStepClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleStepClick() {
    this.setState(state => ({
      current: state.current < state.total ? state.current + STEP : state.total,
    }));
  }

  handleResetClick() {
    this.setState(() => ({ current: 0 }));
  }

  render() {
    const { current, total } = this.state;

    return (
      <React.Fragment>
        <Progress
          type="static"
          current={current}
          total={total}
          style={{ marginBottom: '1.125rem', marginTop: '1.125rem' }}
        />
        <Button onClick={this.handleResetClick} style={{ marginRight: '0.75rem' }}>
          Reset
        </Button>{' '}
        <Button variant="primary" fill onClick={this.handleStepClick} disabled={current === total}>
          Load more
        </Button>
      </React.Fragment>
    );
  }
}
