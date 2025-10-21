import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',

  },
  disabled: {
    opacity: 0.5,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    borderRadius: 8,
  },
  content: {
    flex: 1,
    padding: 8,
    backgroundColor: theme.colors.overlay,
    justifyContent: 'space-between',
  },
  topSection: {
    alignItems: 'flex-start',
  },
  label: {
    color: theme.colors.white,
    fontSize: theme.typography.medium.fontSize,
    fontWeight: theme.typography.medium.fontWeight,
  },
  quantity: {
    color: theme.colors.white,
    fontSize: theme.typography.small.fontSize,
    marginTop: 2,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    gap: 8,
  },

});