import { StyleSheet } from 'react-native'

import { RW, normalizePixel } from '@/utils'
import { Colors } from '@/constants'

export default StyleSheet.create({
  avatarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: RW(40),
    height: RW(40),
    borderRadius: RW(20),
  },
  avatarTransparent: {
    backgroundColor: Colors.TRANSPARENT,
  },
  textStyle: {
    color: Colors.WHITE,
    fontSize: normalizePixel(16),
    fontWeight: '100',
  },
})
