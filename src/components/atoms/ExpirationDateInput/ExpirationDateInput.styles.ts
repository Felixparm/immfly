import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View<{ width?: number }>((props: { width?: number }) => ({
  position: 'relative',
  width: props.width || 150
}));

export const StyledInput = styled.TextInput<{ width?: number }>((props: { width?: number }) => ({
  width: props.width || 150,
  height: 50,
  borderWidth: 1,
  borderColor: theme.colors.gray,
  borderRadius: 8,
  paddingHorizontal: 16,
  fontSize: theme.typography.medium.fontSize,
  color: theme.colors.black,
  backgroundColor: theme.colors.white
}));