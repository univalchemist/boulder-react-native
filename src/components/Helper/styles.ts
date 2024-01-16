import { StyleSheet } from 'react-native'

import { RH, RW } from '@/utils'
import { Colors } from '@/constants'

export default StyleSheet.create({
  container: {
    width: RW(235),
    flexDirection: 'column',
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
  },
  toolTipContainer: {
    borderRadius: RW(18),
    backgroundColor: Colors.WHITE,
    height: 'auto',
    width: '100%',
    elevation: 5,
    shadowColor: Colors.SHADOW,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.75,
    shadowRadius: 10,
  },
  contentWrapper: {
    position: 'relative',
    borderRadius: RW(18),
    height: 'auto',
    width: '100%',
    paddingHorizontal: RW(22),
    paddingVertical: RH(12),
    zIndex: 1,
  },
  triangle: {
    width: 0,
    height: 0,
    position: 'absolute',
    backgroundColor: Colors.TRANSPARENT,
    borderLeftWidth: RW(10),
    borderRightWidth: RW(10),
    borderTopWidth: RW(20),
    borderLeftColor: Colors.TRANSPARENT,
    borderRightColor: Colors.TRANSPARENT,
    borderTopColor: Colors.WHITE,
    transform: [{ rotate: '15deg' }],
    zIndex: 0,
    bottom: RH(-14),
  },
})
