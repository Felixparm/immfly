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
  padding: 20,
  minWidth: 120
});