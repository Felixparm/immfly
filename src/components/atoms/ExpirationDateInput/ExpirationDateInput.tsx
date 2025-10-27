import React from 'react';
import { View, Text } from 'react-native';
import { ExpirationDateInputProps } from './ExpirationDateInput.types';
import { Container, StyledInput } from './ExpirationDateInput.styles';
import { theme } from '../../../theme';

export default function ExpirationDateInput({ value, onChangeText, width, label }: ExpirationDateInputProps) {
  const formatExpirationDate = (text: string) => {
    const digits = text.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) {
      return `${digits.slice(0, 2)}-${digits.slice(2)}`;
    }
    return digits;
  };

  const handleTextChange = (text: string) => {
    const formatted = formatExpirationDate(text);
    onChangeText(formatted);
  };

  if (label) {
    return (
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: theme.typography.small.fontSize, color: theme.colors.black, marginBottom: 2 }}>{label}</Text>
        <Container width={width}>
          <StyledInput
            value={value}
            onChangeText={handleTextChange}
            placeholder="MM-YY"
            keyboardType="numeric"
            width={width}
            maxLength={5}
          />
        </Container>
      </View>
    );
  }

  return (
    <Container width={width}>
      <StyledInput
        value={value}
        onChangeText={handleTextChange}
        placeholder="MM-YY"
        keyboardType="numeric"
        width={width}
        maxLength={5}
      />
    </Container>
  );
}