import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.shape,
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 12,
    margin: 10,
    marginHorizontal: 20,
  },
  text: {
    color: THEME.COLORS.green_dark,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginVertical: 16
  }, 
  plantsList: {

  }
});