import React from 'react';
import { Modal, TouchableOpacity, Text } from 'react-native';
import { CustomModalProps } from './CustomModal.types';
import { Overlay, ModalContainer, CloseButton, CloseButtonText } from './CustomModal.styles';

export default function CustomModal({ visible, onClose, children }: CustomModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <Overlay onPress={onClose}>
        <ModalContainer>
          <CloseButton onPress={onClose}>
            <CloseButtonText>✕</CloseButtonText>
          </CloseButton>
          {children}
        </ModalContainer>
      </Overlay>
    </Modal>
  );
}