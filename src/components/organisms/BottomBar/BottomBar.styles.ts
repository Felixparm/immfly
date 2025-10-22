import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const WhiteContainer = styled.View`
  height: 90px;
  width: 100%;
  background-color: ${theme.colors.white};
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  height: 70px;
  width: 80%;
  flex-direction: row;
  border-radius: 35px;
  overflow: hidden;
`;

export const LeftSection = styled.View`
  flex: 3;
  background-color: ${theme.colors.blue};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const RightSection = styled.View`
  flex: 1;
  background-color: ${theme.colors.gray};
  justify-content: center;
  align-items: center;
`;

export const PayText = styled.Text`
  font-size: ${theme.typography.medium.fontSize}px;
  font-weight: ${theme.typography.medium.fontWeight};
  color: ${theme.colors.white};
  text-align: center;
`;

export const CurrencyDropdownContainer = styled.View`
  min-width: 60px;
`;