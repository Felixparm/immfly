import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View({
  width: '80%',
  height: 60,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 16,
  backgroundColor: theme.colors.white,
  borderRadius: 8,
  marginVertical: 4
});

export const LeftSection = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1
});

export const Circle = styled.View({
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: theme.colors.lightGray,
  marginRight: 12
});

export const ProductInfo = styled.View({
  flex: 1
});

export const ProductTitle = styled.Text({
  fontSize: theme.typography.medium.fontSize,
  fontWeight: theme.typography.medium.fontWeight,
  color: theme.colors.black
});

export const ProductPrice = styled.Text({
  fontSize: theme.typography.small.fontSize,
  color: theme.colors.gray,
  marginTop: 2
});

export const RightSection = styled.View({
  alignItems: 'flex-end'
});

export const CountText = styled.Text({
  fontSize: theme.typography.medium.fontSize,
  fontWeight: theme.typography.medium.fontWeight,
  color: theme.colors.black
});