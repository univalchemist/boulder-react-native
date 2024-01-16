import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RH, RW, font } from '@/utils'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Grey.Lighter,
    paddingHorizontal: RW(16),
    paddingVertical: RH(12),
  },
  title: {
    ...font('regular', 12, Colors.Primary.Dark, 16),
  },
  count: {
    ...font('medium', 12, Colors.Primary.Dark, 16),
  },
})
