import * as React from 'react';

import { Dialog } from './Dialog';
import { Alert } from '../Alert';
import { Button } from '../Button';

const title = 'Dialog Prompt';
const message = `It seems you're about to do this action. It might be destructive or not, but anyways, a heads up about what's going to happen. Are you really sure you want to proceed?`;

const delay = (milliseconds: number) => (result?: any) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(result);
    }, milliseconds);
  });

type State = {
  helperState: string;
  isOpen: boolean;
  type: 'default' | 'primary' | 'secondary' | 'danger';
  feedback: string;
};
class DialogStoryHelper extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);

    this.state = {
      isOpen: false,
      helperState: 'waiting',
      type: null,
      feedback: 'Await user input',
    };
  }

  onCancel() {
    this.setState(() => ({
      isOpen: false,
      helperState: 'canceled',
      feedback: 'User canceled action!',
    }));
  }

  onConfirm() {
    this.setState(
      () => ({
        helperState: 'loading',
        feedback: 'Waiting for promise to resolve',
      }),
      () => {
        delay(2500)().then(() => {
          this.setState(() => ({
            isOpen: false,
            helperState: 'comfirmed',
            feedback: 'User confirmed action!',
          }));
        });
      },
    );
  }

  triggerDialog(type: 'default' | 'primary' | 'secondary' | 'danger' = 'default') {
    this.setState(() => ({
      isOpen: true,
      helperState: 'waiting',
      feedback: 'Await user input',
      type,
    }));
  }

  render() {
    // @ts-ignore
    const alerttypeMap = {
      waiting: 'info',
      loading: 'warning',
      comfirmed: 'success',
      canceled: 'danger',
    }[this.state.helperState];

    return (
      <div>
        <p>Click on the buttons below to display each variation of the &apos;Dialog&apos;</p>
        <div style={{ display: 'flex', width: '100%' }}>
          <div className="cr-mr-2">
            <Button onClick={() => this.triggerDialog()}>Default Dialog</Button>
          </div>
          <div className="cr-mr-2">
            <Button onClick={() => this.triggerDialog('primary')} variant="primary">
              Primary Dialog
            </Button>
          </div>
          <div className="cr-mr-2">
            <Button onClick={() => this.triggerDialog('secondary')} variant="secondary">
              Secondary Dialog
            </Button>
          </div>
          <div>
            <Button onClick={() => this.triggerDialog('danger')} variant="danger">
              Danger Dialog
            </Button>
          </div>
        </div>
        <div className="cr-mt-2">
          <Alert title="Status" noCloseBtn type={alerttypeMap}>
            <pre>Status =&gt; {this.state.feedback}</pre>
          </Alert>
        </div>
        <Dialog
          title={`${title} '${this.state.type}'`}
          message={message}
          isOpen={this.state.isOpen}
          isLoading={this.state.helperState === 'loading'}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          cancelText="No"
          confirmText="Yes"
          type={this.state.type}
        />
      </div>
    );
  }
}

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

export const story = () => <DialogStoryHelper />;

export const percyStory = () => (
  <Dialog
    title={title}
    message={message}
    isOpen={true}
    isLoading={false}
    onCancel={() => {}}
    onConfirm={() => {}}
    cancelText="No"
    confirmText="Yes"
    type="default"
  />
);
