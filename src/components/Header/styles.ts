import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    widht: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 40,
  },
  greeting: {
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.heading
  },
  name: {
    fontSize: THEME.FONT_SIZE.XLG,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.heading,
    lineHeight: 40
  }, 
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 40
  }
});