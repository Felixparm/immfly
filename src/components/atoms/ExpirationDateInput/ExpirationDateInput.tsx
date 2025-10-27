import React from 'react';
import { View, Text } from 'react-native';
import { ExpirationDateInputProps } from './ExpirationDateInput.types';
import { Container, StyledInput } from './ExpirationDateInput.styles';
import { theme } from '../../../theme';
import { formatExpirationDate } from '../../../utils/formatters';

export default function ExpirationDateInput({ value, onChangeText, width, label }: ExpirationDateInputProps) {


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