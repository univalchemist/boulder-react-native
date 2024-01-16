import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RH, RW, font } from '@/utils'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: RW(16),
    paddingVertical: RH(16),
  },
  redLine: {
    height: '100%',
    width: RW(2),
    backgroundColor: Colors.Pink.Default,
  },
  iconWrapper: {
    paddingHorizontal: RW(12),
  },
  content: {},
  itemTitle: {
    ...font('regular', 14, Colors.Pink.Default, 20),
    paddingBottom: RH(12),
  },
  title: {
    ...font('medium', 14, Colors.Primary.Dark, 20),
  },
  description: {
    ...font('regular', 14, Colors.Primary.Light, 20),
    paddingBottom: RH(12),
  },
  dateTime: {
    ...font('regular', 14, Colors.Primary.Light, 20),
  },
})
