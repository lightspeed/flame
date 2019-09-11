import * as React from 'react';
import { Dialog } from '../Dialog';

const DialogWithSize: React.FC<{ maximumWidth: string }> = ({ maximumWidth }) => {
  return (
    <Dialog
      css={{ maxWidth: maximumWidth }}
      title="title"
      message="message"
      isOpen
      onCancel={() => {}}
      onConfirm={() => {}}
    />
  );
};

export { DialogWithSize };
