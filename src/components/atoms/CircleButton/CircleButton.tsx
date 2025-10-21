import React from 'react';
import { CircleButtonProps, ButtonType } from './CircleButton.types';
import { Button, ButtonText } from './CircleButton.styles';

export default function CircleButton({ type, onPress }: CircleButtonProps) {
  return (
    <Button type={type} onPress={onPress}>
      <ButtonText>{type === ButtonType.PLUS ? '+' : '-'}</ButtonText>
    </Button>
  );
}