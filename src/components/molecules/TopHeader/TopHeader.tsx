import React from 'react';
import { TopHeaderProps } from './TopHeader.types';
import { Container, LeftSection, Title, Description, CloseButton, CloseText } from './TopHeader.styles';

export default function TopHeader({ title, description, onClose }: TopHeaderProps) {
  return (
    <Container>
      <LeftSection>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </LeftSection>
      <CloseButton onPress={onClose}>
        <CloseText>×</CloseText>
      </CloseButton>
    </Container>
  );
}