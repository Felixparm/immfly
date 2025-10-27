import React from 'react';
import { ConfirmButtonProps } from './ConfirmButton.types';
import { Button, ButtonText } from './ConfirmButton.styles';

export default function ConfirmButton({ title, onPress, disabled }: ConfirmButtonProps) {
  return (
    <Button onPress={onPress} disabled={disabled}>
      <ButtonText>{title}</ButtonText>
    </Button>
  );
}