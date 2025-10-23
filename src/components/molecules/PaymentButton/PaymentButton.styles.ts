import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.TouchableOpacity<{ backgroundColor: string }>(props => ({
  height: 70,
  flex: 1,
  backgroundColor: props.backgroundColor,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 8
}));

export const Logo = styled.Text({
  fontSize: 24,
  marginBottom: 4
});

export const Title = styled.Text({
  fontSize: theme.typography.small.fontSize,
  fontWeight: theme.typography.small.fontWeight,
  color: theme.colors.white
});