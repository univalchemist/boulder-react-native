import { StyleSheet } from 'react-native'

import { RH, normalizePixel } from '@/utils'
import { Colors } from '@/constants'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RH(5),
    marginBottom: RH(10),
  },
  text: {
    color: Colors.Primary.Light,
    fontSize: normalizePixel(12),
    fontWeight: '600',
  },
})
