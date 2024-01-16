import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { HORIZONTAL_PADDING, RH, RW, font } from '@/utils'
import { HEADER_HEIGHT } from '@/navigation/constants'

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    position: 'relative',
    height: HEADER_HEIGHT,
    paddingVertical: RH(16),
    alignContent: 'center',
    zIndex: 10,
  },
  dropShadow: {
    elevation: 5,
    shadowColor: Colors.SHADOW,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  headerButton: {
    paddingHorizontal: HORIZONTAL_PADDING,
    zIndex: 2,
  },
  space: {
    flexGrow: 1,
    flexShrink: 1,
  },
  title: {
    ...font('medium', 16, Colors.Primary.Dark, 24),
    verticalAlign: 'middle',
    position: 'absolute',
    bottom: RH(16),
    width: '100%',
    textAlign: 'center',
    zIndex: 0,
    paddingHorizontal: RW(56),
  },
})
