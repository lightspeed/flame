import * as React from 'react';
import { customRender, createComponent, fireEvent } from 'test-utils';

import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';

import { Button } from '../Button';

jest.mock('react-dom', () => ({
  createPortal: (node: any) => node,
}));

describe('Modal', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should match with snapshot', () => {
    const component = createComponent(
      <Modal isOpen title="Test Modal">
        <ModalHeader showCloseButton={false}>Modal Title</ModalHeader>
        <ModalBody>Hello World</ModalBody>
        <ModalFooter>
          <button type="button">Action1</button>
          <button type="button">Action2</button>
        </ModalFooter>
      </Modal>,
    );

    expect(component).toMatchSnapshot();
  });

  it('should render the children correctly', () => {
    const { getByText, getByTestId } = customRender(
      <Modal isOpen>
        <ModalHeader showCloseButton>Modal Title</ModalHeader>
        <ModalBody>Hello World</ModalBody>
        <ModalFooter>
          <Button>Action1</Button>
          <Button>Action2</Button>
        </ModalFooter>
      </Modal>,
    );

    getByText('Modal Title');
    getByText('Hello World');
    getByTestId('modal-close-button');
    getByText('Action1');
    getByText('Action2');
  });

  it('should render the ModalHeader title if present, instead of <Modal title="Title">', () => {
    const { getByText, queryByText } = customRender(
      <Modal isOpen title="Modal Title">
        <ModalHeader showCloseButton>The Real Title</ModalHeader>
        <ModalBody>Hello World</ModalBody>
        <ModalFooter>
          <Button>Action1</Button>
          <Button>Action2</Button>
        </ModalFooter>
      </Modal>,
    );

    getByText('The Real Title');
    expect(queryByText('Modal Title')).toBeFalsy();
  });

  it('should not render a close button', () => {
    const { queryByTestId } = customRender(
      <Modal isOpen>
        <ModalHeader showCloseButton={false}>Modal Title</ModalHeader>
        <ModalBody>Hello World</ModalBody>
        <ModalFooter>
          <Button>Action1</Button>
          <Button>Action2</Button>
        </ModalFooter>
      </Modal>,
    );

    expect(queryByTestId('modal-close-button')).toBeFalsy();
  });

  it('should invoke the onAfterOpen method when the modal has been opened', () => {
    const onOpen = jest.fn();
    createComponent(
      <Modal isOpen title="Test Modal" onAfterOpen={onOpen}>
        Test Modal
      </Modal>,
    );

    expect(onOpen).toHaveBeenCalled();
  });

  it('should invoke onRequestClose when the close button is clicked', () => {
    const onRequestClose = jest.fn();
    const { getByTestId } = customRender(
      <Modal isOpen title="Test Modal" onRequestClose={onRequestClose}>
        <ModalHeader showCloseButton>Modal Title</ModalHeader>
        <ModalBody>Hello World</ModalBody>
      </Modal>,
    );

    const component = getByTestId('modal-close-button');
    fireEvent.click(component);
    expect(onRequestClose).toHaveBeenCalledTimes(1);
  });

  it('should invoke onCloseClicked when the close button is clicked', () => {
    const onCloseClicked = jest.fn();
    const { getByTestId } = customRender(
      <Modal isOpen title="Test Modal">
        <ModalHeader showCloseButton onCloseClicked={onCloseClicked}>
          Modal Title
        </ModalHeader>
        <ModalBody>Hello World</ModalBody>
      </Modal>,
    );

    const component = getByTestId('modal-close-button');
    fireEvent.click(component);
    expect(onCloseClicked).toHaveBeenCalledTimes(1);
  });

  it('should set overflow: hidden on the modal target', () => {
    const modalTarget = document.body;
    customRender(
      <Modal isOpen title="Test Modal" onRequestClose={jest.fn()}>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>Hello World</ModalBody>
      </Modal>,
    );
    const modalTargetStyles = window.getComputedStyle(modalTarget);

    expect(modalTargetStyles.getPropertyValue('overflow')).toEqual('hidden');
  });
});
