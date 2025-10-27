import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View({
  flex: 1,
  height: 70
});

export const Button = styled.TouchableOpacity({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 12,
  backgroundColor: 'transparent'
});

export const ButtonText = styled.Text({
  fontSize: theme.typography.small.fontSize,
  fontWeight: theme.typography.small.fontWeight,
  color: theme.colors.white
});

export const Arrow = styled.Text({
  fontSize: theme.typography.small.fontSize,
  color: theme.colors.white
});

export const Option = styled.TouchableOpacity({
  padding: 16
});

export const OptionText = styled.Text({
  fontSize: theme.typography.medium.fontSize,
  fontWeight: theme.typography.medium.fontWeight,
  color: theme.colors.black
});