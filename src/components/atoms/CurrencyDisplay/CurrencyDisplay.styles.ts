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

export const Overlay = styled.TouchableOpacity({
  flex: 1,
  backgroundColor: theme.colors.overlay,
  justifyContent: 'center',
  alignItems: 'center'
});

export const ModalContainer = styled.View({
  backgroundColor: theme.colors.white,
  borderRadius: 8,
  padding: 20,
  minWidth: 120
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