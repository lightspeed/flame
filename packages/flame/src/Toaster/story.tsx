import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import Readme from './README.md';
import { ToasterProvider, useToasts } from './index';
import { Button } from '../Button';
import { Heading2 } from '../Text';

const stories = storiesOf('Components|Toaster', module).addDecorator(withReadme(Readme));

const Spacer: React.FC = ({ children }) => {
  const nextChildren = React.Children.map(children, child => (
    <div css={{ margin: '8px' }}>{child}</div>
  ));
  return <div css={{ display: 'flex' }}>{nextChildren}</div>;
};

const ToastExample = () => {
  const { addToast } = useToasts();

  return (
    <Spacer>
      <Button
        type="button"
        onClick={() => {
          addToast('This is a non-edible toast!', {
            appearance: 'success',
          });
        }}
      >
        Generate success
      </Button>
      <Button
        type="button"
        onClick={() => {
          addToast('This is a non-edible toast!', {
            appearance: 'error',
          });
        }}
      >
        Generate error
      </Button>
    </Spacer>
  );
};

const AutoDismissToastExample = () => {
  const { addToast } = useToasts();

  return (
    <Spacer>
      <Button
        type="button"
        onClick={() => {
          addToast(`I'll disappear after 5 seconds`, {
            autoDismiss: true,
            appearance: 'success',
          });
        }}
      >
        Generate success
      </Button>
      <Button
        type="button"
        onClick={() => {
          addToast(`I'll disappear after 5 seconds`, {
            autoDismiss: true,
            appearance: 'error',
          });
        }}
      >
        Generate error
      </Button>
    </Spacer>
  );
};

const ActionableToastExample = () => {
  const { addActionableToast } = useToasts();

  return (
    <Spacer>
      <Button
        type="button"
        onClick={() => {
          addActionableToast({
            content: `I have an action!`,
            actionTitle: 'Undo',
            actionCallback: () => {
              console.log('You clicked the undo button!');
            },
          });
        }}
      >
        Generate success
      </Button>
      <Button
        type="button"
        onClick={() => {
          addActionableToast(
            {
              content: `I have an action!`,
              actionTitle: 'Undo',
              actionCallback: () => {
                console.log('You clicked the undo button!');
              },
            },
            {
              appearance: 'error',
            },
          );
        }}
      >
        Generate error
      </Button>
    </Spacer>
  );
};

const LongToastExample = () => {
  const { addToast } = useToasts();

  return (
    <Spacer>
      <Button
        type="button"
        onClick={() => {
          addToast('This toast has a much more longer message than the rest of the toasters.');
        }}
      >
        Generate success
      </Button>
      <Button
        type="button"
        onClick={() => {
          addToast('This toast has a much more longer message than the rest of the toasters.', {
            appearance: 'error',
          });
        }}
      >
        Generate error
      </Button>
    </Spacer>
  );
};

stories.add(
  'Toaster',
  () => (
    <ToasterProvider>
      <div>
        <Heading2>Create a toast without an auto timeout</Heading2>
        <ToastExample />
      </div>
      <div>
        <Heading2>Create a toast that closes itself after a few</Heading2>
        <AutoDismissToastExample />
      </div>
      <div>
        <Heading2>Create a toast with an action</Heading2>
        <ActionableToastExample />
      </div>
      <div>
        <Heading2>Create a toast with a long message</Heading2>
        <LongToastExample />
      </div>
    </ToasterProvider>
  ),

  { percy: { skip: true } },
);
