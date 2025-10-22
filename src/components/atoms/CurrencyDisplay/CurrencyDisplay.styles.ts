import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 4px 0 20px 0;
`;

export const CurrencyText = styled.Text`
  font-size: ${theme.typography.small.fontSize}px;
  color: ${theme.colors.gray};
`;

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  min-width: 120px;
`;

export const Option = styled.TouchableOpacity`
  padding-vertical: 12px;
  align-items: center;
`;

export const OptionText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;