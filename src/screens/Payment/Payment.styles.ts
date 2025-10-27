import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Content = styled.ScrollView({
  flex: 1,
  backgroundColor: theme.colors.lightGray
});

export const BasketContainer = styled.View({
  alignItems: 'center',
  paddingVertical: 16,
  gap: 8,
});

export const TotalContainer = styled.View({
  alignItems: 'flex-end',
  paddingVertical: 20,
  paddingHorizontal: 20,
  backgroundColor: theme.colors.white
});

export const TotalLabel = styled.Text({
  fontSize: theme.typography.small.fontSize,
  color: theme.colors.gray,
  marginBottom: 4
});

export const TotalPrice = styled.Text({
  fontSize: theme.typography.large.fontSize,
  fontWeight: theme.typography.large.fontWeight,
  color: theme.colors.black
});

export const PaymentButtonsContainer = styled.View({
  flexDirection: 'row',
  paddingHorizontal: 20,
  paddingBottom: 20,
  gap: 16,
  backgroundColor: theme.colors.white
});

export const ModalContent = styled.View({
  padding: 20,
  backgroundColor: theme.colors.white,
  borderRadius: 12,
  minWidth: 300
});

export const ModalTitle = styled.Text({
  fontSize: theme.typography.large.fontSize,
  fontWeight: theme.typography.large.fontWeight,
  color: theme.colors.black,
  textAlign: 'center',
  marginBottom: 16
});

export const ModalLabel = styled.Text({
  fontSize: theme.typography.medium.fontSize,
  color: theme.colors.black,
  marginBottom: 12
});

export const InputContainer = styled.View({
  alignItems: 'center',
  marginBottom: 16
});