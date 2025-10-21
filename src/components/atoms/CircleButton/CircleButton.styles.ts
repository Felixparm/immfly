import styled from 'styled-components/native';
import { theme } from '../../../theme';
import { ButtonType } from './CircleButton.types';

export const Button = styled.TouchableOpacity<{ type: ButtonType; disabled?: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.type === ButtonType.PLUS ? theme.colors.green : theme.colors.red};
  opacity: ${props => props.disabled ? 0.3 : 1};
`;

export const ButtonText = styled.Text`
  font-size: ${theme.typography.medium.fontSize}px;
  font-weight: ${theme.typography.medium.fontWeight};
  color: ${theme.colors.white};
`;