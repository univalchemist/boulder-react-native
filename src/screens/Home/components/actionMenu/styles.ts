import { StyleSheet } from 'react-native'

import { Colors, SCREEN_WIDTH } from '@/constants'
import { HORIZONTAL_PADDING, RW, RH } from '@/utils'

export const BUTTON_HEIGHT = RH(40)

export default StyleSheet.create({
  actionMenuContainer: {
    width: SCREEN_WIDTH - RW(60),
    zIndex: 2,
    position: 'relative',
    paddingRight: HORIZONTAL_PADDING,
    bottom: RH(-7),
  },
  menusContainer: {
    height: BUTTON_HEIGHT,
    zIndex: 1,
    flex: 1,
    position: 'relative',
  },
  menuToggleButton: {
    width: BUTTON_HEIGHT,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  totalUnread: {
    position: 'absolute',
    top: 0,
    right: RW(-6),
    zIndex: 3,
  },
  unread: {
    position: 'absolute',
    top: RH(-2),
    right: RW(-8),
    zIndex: 1,
  },
  menuButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  menuButton: {
    width: BUTTON_HEIGHT,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    position: 'relative',
    borderWidth: RW(1),
    borderColor: Colors.TRANSPARENT,
  },
  activeMenuButton: {
    borderColor: Colors.Blue.Default,
  },
})
