import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: THEME.COLORS.green,
    padding: 20
  },
  wrapper: {
    backgroundColor: THEME.COLORS.shape,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 12,
    marginVertical: 8,
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  title: {
    color: THEME.COLORS.heading,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginVertical: 16,
    flex: 1,
    marginLeft: 23,
    fontSize: THEME.FONT_SIZE.MD
  }, 
  details: {
    alignItems: 'flex-end'
  },
  time: {
    marginTop: 8,
    color: THEME.COLORS.body_dark,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.MD

  },
  timeLabel: {
    color: THEME.COLORS.body_light,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD
  },
  deletePlant: {
    width: 100,
    height: 86,
    backgroundColor: THEME.COLORS.red,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    right: 12,
    bottom: -8,
    paddingLeft: 6
  }
});