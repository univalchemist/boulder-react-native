import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RW, font } from '@/utils'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Pink.Default,
    paddingHorizontal: RW(4),
    height: RW(16),
    minWidth: RW(16),
    borderRadius: RW(20),
  },
  text: {
    ...font('semibold', 12, Colors.WHITE),
  },
})
