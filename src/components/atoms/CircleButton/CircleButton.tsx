import React from 'react';
import { CircleButtonProps, ButtonType } from './CircleButton.types';
import { Button, ButtonText } from './CircleButton.styles';

export default function CircleButton({ type, onPress, disabled = false }: CircleButtonProps) {
  return (
    <Button type={type} onPress={disabled ? undefined : onPress} disabled={disabled}>
      <ButtonText>{type === ButtonType.PLUS ? '+' : '-'}</ButtonText>
    </Button>
  );
}