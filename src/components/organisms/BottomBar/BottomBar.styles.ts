import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const WhiteContainer = styled.View({
  height: 90,
  width: '100%',
  backgroundColor: theme.colors.white,
  justifyContent: 'center',
  alignItems: 'center'
});

export const Container = styled.View({
  height: 70,
  width: '80%',
  flexDirection: 'row',
  borderRadius: 35,
  overflow: 'hidden'
});

export const LeftSection = styled.TouchableOpacity<{ disabled?: boolean }>((props: { disabled?: boolean }) => ({
  flex: 2,
  backgroundColor: theme.colors.blue,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  gap: 8,
  opacity: props.disabled ? 0.5 : 1
}));

export const RightSection = styled.View({
  flex:1,
  backgroundColor: theme.colors.gray,
  justifyContent: 'center',
  alignItems: 'center'
});

export const PayText = styled.Text({
  fontSize: theme.typography.medium.fontSize,
  fontWeight: theme.typography.medium.fontWeight,
  color: theme.colors.white,
  textAlign: 'center'
});

export const CurrencyDropdownContainer = styled.View({
  minWidth: 60
});

export const CurrencyText = styled.Text({
  fontSize: theme.typography.medium.fontSize,
  fontWeight: theme.typography.medium.fontWeight,
  color: theme.colors.white
});