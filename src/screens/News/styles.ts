import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RH, RW } from '@/utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: RW(16),
  },
  wrapper: {
    flex: 1,
  },
  inputArea: {
    paddingBottom: RH(25),
  },
})
