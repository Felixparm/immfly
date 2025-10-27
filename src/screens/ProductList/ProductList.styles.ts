import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View({
  flex: 1
});

export const ScrollContainer = styled.ScrollView({
  flex: 1
});

export const BottomContainer = styled.View({
  paddingBottom: 20
});

export const Centered = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
});

export const Grid = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 8
});

export const CardContainer = styled.View({
  width: '48%',
  marginBottom: 8
});

export const ErrorText = styled.Text({
  fontSize: theme.typography.medium.fontSize,
  color: theme.colors.gray
});