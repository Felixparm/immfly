import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 8,
    backgroundColor: theme.colors.white,
  },
  header: {
    fontSize: theme.typography.medium.fontSize,
    fontWeight: theme.typography.medium.fontWeight,
    marginTop: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});