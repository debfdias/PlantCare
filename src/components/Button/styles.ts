import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.green,
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  title: {
    color: THEME.COLORS.white,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD
  }, 
});