import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: THEME.FONT_SIZE.LG,
    textAlign: 'center',
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.heading,
    marginTop: 30,
    marginBottom: -30,
    paddingHorizontal: 16,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.heading,
    paddingHorizontal: 30,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  welcomeButton: {
    backgroundColor: THEME.COLORS.green,
    borderRadius: 6,
    height: 36,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  textButton: {
    color: THEME.COLORS.white,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  img: {
    height: Dimensions.get('window').width * 0.7
  },
  iconButton: {
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.white,
    marginTop: 2,
    marginRight: -6
  }
});