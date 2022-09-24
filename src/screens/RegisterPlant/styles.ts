import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: THEME.COLORS.shape
  },
  header: {
    width: '100%',
    paddingHorizontal:16,
    paddingVertical: 36
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.shape
  },
  plantName: {
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.heading,
    marginTop: 16
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.heading,
    marginTop: 12
  },
  plantPanel: {
    backgroundColor: THEME.COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingVertical: 24
  },
  plantTip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.blue_light,
    padding: 20,
    borderRadius: 12,
    position: 'relative',
    bottom: 60
  },
  tipImg: {
    width: 56,
    height: 56
  },
  tipText: {
    flex: 1,
    marginLeft: 16,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: 'justify',
    color: THEME.COLORS.blue,
    fontSize: THEME.FONT_SIZE.MD
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.heading,
    fontSize: THEME.FONT_SIZE.MD,
    paddingVertical: 12
  },
  buttonHour: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 40,
    borderRadius: 6,
    marginBottom: 36,
    marginTop: 24,
    backgroundColor: THEME.COLORS.shape,
    paddingHorizontal: 24,
    alignSelf: 'center',
  },
  textButtonHour: {
    color: THEME.COLORS.heading,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    
  }, 
});