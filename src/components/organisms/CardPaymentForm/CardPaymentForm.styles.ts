import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View({
  gap: 16
});

export const RowContainer = styled.View({
  flexDirection: 'row',
  gap: 16
});

export const InputContainer = styled.View({});

export const ErrorText = styled.Text({
  fontSize: theme.typography.small.fontSize,
  color: theme.colors.red
});