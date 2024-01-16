import { Platform, StyleSheet } from 'react-native'

import { RW, RH, normalizePixel } from '@/utils'
import { Colors } from '@/constants'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Primary.Default,
    borderRadius: RW(15),
    height: RH(30),
    paddingLeft: RW(10),
    paddingRight: RW(10),
  },
  text: {
    backgroundColor: Colors.TRANSPARENT,
    color: Colors.WHITE,
    fontSize: normalizePixel(12),
  },
  activityIndicator: {
    marginTop: Platform.select({
      ios: -RH(14),
      android: -RH(16),
      default: -RH(15),
    }),
  },
})
