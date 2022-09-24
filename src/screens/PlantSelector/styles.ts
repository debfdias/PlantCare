import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.background,
  },
  title: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    color: THEME.COLORS.heading,
    marginTop: 20
  },
  subtitle: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.heading,
    lineHeight: 18
  },
  header: {
    paddingHorizontal: 30
  },
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 8,
    marginVertical: 32,
    paddingLeft: 32,
    paddingRight: 64
  }, 
  plantsList: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 8,
    marginHorizontal: 16
  }
});