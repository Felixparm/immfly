import styled from 'styled-components/native';
import { theme } from '../../../theme';
import { ButtonType } from './CircleButton.types';

export const Button = styled.TouchableOpacity<{ type: ButtonType; disabled?: boolean }>((props: { type: ButtonType; disabled?: boolean }) => ({
  width: 24,
  height: 24,
  borderRadius: 12,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: props.type === ButtonType.PLUS ? theme.colors.green : theme.colors.red,
  opacity: props.disabled ? 0.3 : 1
}));

export const ButtonText = styled.Text({
  fontSize: theme.typography.medium.fontSize,
  fontWeight: theme.typography.medium.fontWeight,
  color: theme.colors.white
});