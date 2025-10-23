import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled.View({
  flex: 1,
  height: 70
});

export const Button = styled.TouchableOpacity({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 12,
  backgroundColor: 'transparent'
});

export const ButtonText = styled.Text({
  fontSize: theme.typography.small.fontSize,
  fontWeight: theme.typography.small.fontWeight,
  color: theme.colors.white
});

export const Arrow = styled.Text({
  fontSize: theme.typography.small.fontSize,
  color: theme.colors.white
});

export const Overlay = styled.TouchableOpacity({
  flex: 1,
  backgroundColor: theme.colors.overlay,
  justifyContent: 'center',
  alignItems: 'center'
});

export const DropdownContainer = styled.View({
  backgroundColor: theme.colors.white,
  borderRadius: 8,
  minWidth: 200,
  maxHeight: 300
});

export const Option = styled.TouchableOpacity({
  padding: 16,
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.gray
});

export const OptionText = styled.Text({
  fontSize: theme.typography.medium.fontSize,
  fontWeight: theme.typography.medium.fontWeight,
  color: theme.colors.black
});