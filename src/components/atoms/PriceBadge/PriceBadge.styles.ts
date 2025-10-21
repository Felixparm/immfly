import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Badge = styled.View`
  background-color: ${theme.colors.whiteSemi};
  padding-horizontal: 8px;
  padding-vertical: 4px;
  border-radius: 12px;
`;

export const Text = styled.Text`
  font-size: ${theme.typography.small.fontSize}px;
  font-weight: ${theme.typography.small.fontWeight};
`;