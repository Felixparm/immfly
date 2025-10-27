import { KeyboardTypeOptions } from 'react-native';

export interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  width?: number;
  adornment?: string;
  label?: string;
}