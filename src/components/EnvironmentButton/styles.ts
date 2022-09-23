import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.shape,
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    paddingHorizontal: 12
    
  },
  text: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.heading
  },
  containerActive: {
    backgroundColor: THEME.COLORS.green_light,
  },
  textActive: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.green_dark
  }
});