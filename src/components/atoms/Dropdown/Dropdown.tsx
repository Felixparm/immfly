import React, { useState } from 'react';
import { DropdownProps } from './Dropdown.types';
import { Container, Button, ButtonText, Arrow, Option, OptionText } from './Dropdown.styles';
import CustomModal from '../../molecules/CustomModal/CustomModal';
import { formatLabel } from '../../../utils/formatters';

export default function Dropdown({ value, options, onValueChange }: DropdownProps) {
  const [isVisible, setIsVisible] = useState(false);



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
      
      <CustomModal visible={isVisible} onClose={() => setIsVisible(false)}>
        {options.map((option) => (
          <Option
            key={option}
            onPress={() => handleSelect(option)}
          >
            <OptionText>{formatLabel(option)}</OptionText>
          </Option>
        ))}
      </CustomModal>
    </Container>
  );
}