import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 16,
  paddingVertical: 12,
  backgroundColor: theme.colors.white
});

export const LeftSection = styled.View({
  flex: 1
});

export const Title = styled.Text({
  fontSize: theme.typography.medium.fontSize,
  fontWeight: theme.typography.medium.fontWeight,
  color: theme.colors.black
});

export const Description = styled.Text({
  fontSize: theme.typography.small.fontSize,
  fontWeight: theme.typography.small.fontWeight,
  color: theme.colors.gray,
  marginTop: 4
});

export const CloseButton = styled.TouchableOpacity({
  padding: 8
});

export const CloseText = styled.Text({
  fontSize: 18,
  fontWeight: 'bold',
  color: theme.colors.black
});