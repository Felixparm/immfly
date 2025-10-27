import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Button = styled.TouchableOpacity<{ disabled?: boolean }>((props: { disabled?: boolean }) => ({
  backgroundColor: theme.colors.green,
  paddingHorizontal: 16,
  paddingVertical: 8,
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 16,
  maxWidth: 120,
  alignSelf: 'center',
  opacity: props.disabled ? 0.3 : 1
}));

export const ButtonText = styled.Text({
  fontSize: theme.typography.medium.fontSize,
  fontWeight: theme.typography.medium.fontWeight,
  color: theme.colors.white
});