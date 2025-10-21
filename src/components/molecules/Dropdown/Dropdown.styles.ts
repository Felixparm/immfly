import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View`
  flex: 1;
  height: 70px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 12px;
  background-color: transparent;
`;

export const ButtonText = styled.Text`
  font-size: ${theme.typography.small.fontSize}px;
  font-weight: ${theme.typography.small.fontWeight};
  color: ${theme.colors.white};
`;

export const Arrow = styled.Text`
  font-size: ${theme.typography.small.fontSize}px;
  color: ${theme.colors.white};
`;

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.colors.overlay};
  justify-content: center;
  align-items: center;
`;

export const DropdownContainer = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  min-width: 200px;
  max-height: 300px;
`;

export const Option = styled.TouchableOpacity`
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.lightGray};
`;

export const OptionText = styled.Text`
  font-size: ${theme.typography.medium.fontSize}px;
  font-weight: ${theme.typography.medium.fontWeight};
  color: ${theme.colors.black};
`;