import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 54
  },
  emoji: {
    fontSize: 40
  },
  input: {
    width: '100%',
    color: THEME.COLORS.heading,
    textAlign: 'center',
    borderColor: THEME.COLORS.gray,
    borderBottomWidth: 2,
    fontSize: 18,
    padding: 12,
    marginTop: 48
  },
  title: {
    textAlign: 'center',
    color: THEME.COLORS.heading,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    lineHeight: 32,
    fontSize: THEME.FONT_SIZE.LG,
    marginTop: 20
  },
  footer: {
    width: '100%',
    marginTop: 40
  }
});