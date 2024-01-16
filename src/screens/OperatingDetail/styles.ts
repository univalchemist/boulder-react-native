import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RH, RW, font } from '@/utils'

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: RW(16),
    paddingVertical: RW(16),
  },
  wrapper: {
    backgroundColor: Colors.WHITE,
  },
  redLine: {
    height: '100%',
    width: RW(2),
    backgroundColor: Colors.Pink.Default,
  },
  iconWrapper: {
    paddingRight: RW(12),
  },
  content: {
    paddingTop: RH(16),
  },
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
    ...font('regular', 14, Colors.Primary.Normal, 20),
  },
  created: {
    ...font('regular', 14, Colors.Primary.Light, 20),
    paddingTop: RH(12),
  },
  name: {
    ...font('regular', 14, Colors.Pink.Default, 20),
  },
})
