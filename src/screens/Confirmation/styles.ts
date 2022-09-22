import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    color: THEME.COLORS.heading,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    textAlign: 'center',
    marginTop: 16
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  subtitle: {
    color: THEME.COLORS.heading,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: 'center',
    marginTop: 16,
    paddingVertical: 20,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 52,
    padding: 30
  },
  emoji: {
    fontSize: 78
  }
});