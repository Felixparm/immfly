import React, { useState } from 'react';
import { Modal } from 'react-native';
import { DropdownProps } from './Dropdown.types';
import { Container, Button, ButtonText, Arrow, Overlay, DropdownContainer, Option, OptionText } from './Dropdown.styles';

export default function Dropdown({ value, options, onValueChange }: DropdownProps) {
  const [isVisible, setIsVisible] = useState(false);

  const formatLabel = (value: string) => {
    return value.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const handleSelect = (option: string) => {
    onValueChange(option);
    setIsVisible(false);
  };

  return (
    <Container>
      <Button onPress={() => setIsVisible(true)}>
        <ButtonText>{formatLabel(value)}</ButtonText>
        <Arrow>▼</Arrow>
      </Button>
      
      <Modal visible={isVisible} transparent animationType="fade">
        <Overlay onPress={() => setIsVisible(false)}>
          <DropdownContainer>
            {options.map((option) => (
              <Option
                key={option}
                onPress={() => handleSelect(option)}
              >
                <OptionText>{formatLabel(option)}</OptionText>
              </Option>
            ))}
          </DropdownContainer>
        </Overlay>
      </Modal>
    </Container>
  );
}