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
    fontSize: theme.typography.large.fontSize,
    fontWeight: theme.typography.large.fontWeight,
    marginBottom: 16,
  },
  content: {
    flex: 1,
  },
});