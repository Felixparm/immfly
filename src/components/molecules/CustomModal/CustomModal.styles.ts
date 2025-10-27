import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Overlay = styled.TouchableOpacity({
  flex: 1,
  backgroundColor: theme.colors.overlay,
  justifyContent: 'center',
  alignItems: 'center'
});

export const ModalContainer = styled.View({
  backgroundColor: theme.colors.white,
  borderRadius: 8,
  padding: 8,
});

export const CloseButton = styled.TouchableOpacity({
  position: 'absolute',
  top: 8,
  right: 8,
  zIndex: 1,
  width: 24,
  height: 24,
  alignItems: 'center',
  justifyContent: 'center'
});

export const CloseButtonText = styled.Text({
  fontSize: 16,
  color: theme.colors.gray,
  fontWeight: 'bold'
});