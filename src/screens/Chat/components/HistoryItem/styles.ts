import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RH, RW, font } from '@/utils'

export default StyleSheet.create({
  container: {
    paddingTop: RH(20),
  },
  content: {
    backgroundColor: Colors.WHITE,
    borderRadius: RW(16),
    paddingVertical: RH(16),
    paddingHorizontal: RW(12),
    marginTop: RH(16),
    gap: RH(12),
  },
  item: {},
  bottomBorder: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.Grey.Lighter,
    paddingBottom: RH(16),
  },
  title: {
    ...font('regular', 12, Colors.Primary.Dark, 16),
  },
  messageTitle: {
    ...font('medium', 14, Colors.Primary.Dark, 20),
  },
  messageText: {
    ...font('regular', 12, Colors.Primary.Light, 16),
  },
})
