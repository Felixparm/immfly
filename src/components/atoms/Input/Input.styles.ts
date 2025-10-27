import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View<{ width?: number }>((props: { width?: number }) => ({
  position: 'relative',
  width: props.width || 'auto'
}));

export const StyledInput = styled.TextInput<{ width?: number }>((props: { width?: number }) => ({
  height: 50,
  borderWidth: 1,
  borderColor: theme.colors.gray,
  borderRadius: 8,
  paddingHorizontal: 16,
  paddingRight: 40,
  fontSize: theme.typography.medium.fontSize,
  color: theme.colors.black,
  backgroundColor: theme.colors.white,
  width: props.width || 'auto'
}));

export const Adornment = styled.Text({
  position: 'absolute',
  right: 12,
  top: 15,
  fontSize: theme.typography.medium.fontSize,
  color: theme.colors.gray
});