import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  wrapper: {
    backgroundColor: THEME.COLORS.shape,
    flex: 1,
    alignItems: 'center',
    borderRadius: 20,
    width: '85%',
    padding: 8,
    paddingVertical: 12
  },
  text: {
    color: THEME.COLORS.green_dark,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginVertical: 16
  }, 
  plantsList: {

  }
});