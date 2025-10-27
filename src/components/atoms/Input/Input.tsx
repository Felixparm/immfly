import React from 'react';
import { View, Text } from 'react-native';
import { InputProps } from './Input.types';
import { Container, StyledInput, Adornment } from './Input.styles';
import { theme } from '../../../theme';

export default function Input({ value, onChangeText, placeholder, secureTextEntry, keyboardType, width, adornment, label }: InputProps) {
  if (label) {
    return (
      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: theme.typography.small.fontSize, color: theme.colors.black, marginBottom: 2 }}>{label}</Text>
        <Container width={width}>
          <StyledInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            width={width}
          />
          {adornment && <Adornment>{adornment}</Adornment>}
        </Container>
      </View>
    );
  }

  return (
    <Container width={width}>
      <StyledInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        width={width}
      />
      {adornment && <Adornment>{adornment}</Adornment>}
    </Container>
  );
}