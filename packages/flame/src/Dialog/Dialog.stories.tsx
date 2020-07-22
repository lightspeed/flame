import * as React from 'react';

import { Dialog } from './Dialog';

import { Alert } from '../Alert';
import { Button } from '../Button';

const title = 'Dialog Prompt';
const message = `It seems you're about to do this action. It might be destructive or not, but anyways, a heads up about what's going to happen. Are you really sure you want to proceed?`;
const Potato = () => <div>potato</div>;

const delay = (milliseconds: number) => (result?: any) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(result);
    }, milliseconds);
  });

const DialogHelper = () => {
  const [state, setState] = React.useState({
    isOpen: false,
    helperState: 'waiting',
    type: null,
    feedback: 'Await user input',
  });

  const onCancel = () => {
    setState(prevState => ({
      ...prevState,
      isOpen: false,
      helperState: 'canceled',
      feedback: 'User canceled action!',
    }));
  };

  const onConfirm = () => {
    setState(prevState => ({
      ...prevState,
      helperState: 'loading',
      feedback: 'Waiting for promise to resolve',
    }));

    delay(2500)().then(() => {
      setState(prevState => ({
        ...prevState,
        isOpen: false,
        helperState: 'comfirmed',
        feedback: 'User confirmed action!',
      }));
    });
  };

  const triggerDialog = (type: 'default' | 'primary' | 'secondary' | 'danger' = 'default') => {
    setState(prevState => ({
      ...prevState,
      isOpen: true,
      helperState: 'waiting',
      feedback: 'Await user input',
      type,
    }));
  };

  // @ts-ignore
  const alerttypeMap = {
    waiting: 'info',
    loading: 'warning',
    comfirmed: 'success',
    canceled: 'danger',
  }[state.helperState];

  return (
    <div>
      <p>Click on the buttons below to display each variation of the &apos;Dialog&apos;</p>
      <div style={{ display: 'flex', width: '100%' }}>
        <div className="cr-mr-2">
          <Button onClick={() => triggerDialog()}>Default Dialog</Button>
        </div>
        <div className="cr-mr-2">
          <Button onClick={() => triggerDialog('primary')} variant="primary">
            Primary Dialog
          </Button>
        </div>
        <div className="cr-mr-2">
          <Button onClick={() => triggerDialog('secondary')} variant="secondary">
            Secondary Dialog
          </Button>
        </div>
        <div>
          <Button onClick={() => triggerDialog('danger')} variant="danger">
            Danger Dialog
          </Button>
        </div>
      </div>
      <div className="cr-mt-2">
        <Alert title="Status" noCloseBtn type={alerttypeMap}>
          <pre>Status =&gt; {state.feedback}</pre>
        </Alert>
      </div>
      <Dialog
        title={`${title} '${state.type}'`}
        message={message}
        isOpen={state.isOpen}
        isLoading={state.helperState === 'loading'}
        onCancel={onCancel}
        onConfirm={onConfirm}
        cancelText="No"
        confirmText="Yes"
        type={state.type}
      />
    </div>
  );
};

export default {
  title: 'Components/Dialog',
  component: Potato,
};

export const story = () => <DialogHelper />;

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
