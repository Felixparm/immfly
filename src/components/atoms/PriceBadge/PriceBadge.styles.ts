import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Badge = styled.View({
  backgroundColor: theme.colors.whiteSemi,
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 12
});

export const Text = styled.Text({
  fontSize: theme.typography.small.fontSize,
  fontWeight: theme.typography.small.fontWeight,
  color: theme.colors.black
});