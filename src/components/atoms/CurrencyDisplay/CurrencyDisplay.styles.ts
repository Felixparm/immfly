import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 20,
  paddingTop: 4,
  paddingBottom: 20
});

export const CurrencyText = styled.Text({
  fontSize: theme.typography.small.fontSize,
  color: theme.colors.gray
});


export const Option = styled.TouchableOpacity({
  paddingVertical: 12,
  alignItems: 'center'
});

export const OptionText = styled.Text({
  fontSize: theme.typography.medium.fontSize,
  fontWeight: theme.typography.medium.fontWeight,
  color: theme.colors.black
});