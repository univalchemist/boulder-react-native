import { StyleSheet } from 'react-native'

import { RH, normalizePixel } from '@/utils'
import { Colors } from '@/constants'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: RH(5),
    marginBottom: RH(10),
  },
  text: {
    color: Colors.Primary.Default,
    fontSize: normalizePixel(12),
    fontWeight: '300',
  },
})
