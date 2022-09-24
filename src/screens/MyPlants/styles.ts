import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.background,
    paddingHorizontal: 30,
  },
  spotlight: {
    backgroundColor: THEME.COLORS.blue_light,
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  spotlightImg: {
    width: 44,
    height: 44,
    alignSelf: 'flex-start'
  },
  spotlightText: {
    color: THEME.COLORS.blue,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: 'justify',
    marginLeft: 12,
    flex: 1
  },
  plants: {
    flex: 1,
    width: '100%'
  },
  plantTitle: {
    color: THEME.COLORS.heading,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    marginVertical: 20
  }
});