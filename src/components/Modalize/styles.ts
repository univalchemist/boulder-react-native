import { StyleSheet } from 'react-native'

import { RW, RH, font } from '@/utils'
import { Colors } from '@/constants'

export default StyleSheet.create({
  modalStyle: {
    paddingHorizontal: RW(12),
    paddingVertical: RH(12),
    backgroundColor: Colors.Grey.Lighter,
  },
  childrenStyle: {
    paddingBottom: RH(24),
  },
  container: {
    flex: 1,
  },
  content: {
    paddingTop: RH(16),
    flex: 1,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    ...font('medium', 18, Colors.Primary.Dark, 24),
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
})
