import React from 'react';
import { PaymentButtonProps } from './PaymentButton.types';
import { Container, Logo, Title } from './PaymentButton.styles';
import { theme } from '../../../theme';

export default function PaymentButton({ 
  logo, 
  title, 
  backgroundColor = theme.colors.black, 
  onPress 
}: PaymentButtonProps) {
  return (
    <Container backgroundColor={backgroundColor} onPress={onPress}>
      <Logo>{logo}</Logo>
      <Title>{title}</Title>
    </Container>
  );
}