import React from 'react';
import { Modal } from 'react-native';
import { CustomModalProps } from './CustomModal.types';
import { Overlay, ModalContainer } from './CustomModal.styles';

export default function CustomModal({ visible, onClose, children }: CustomModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <Overlay onPress={onClose}>
        <ModalContainer>
          {children}
        </ModalContainer>
      </Overlay>
    </Modal>
  );
}