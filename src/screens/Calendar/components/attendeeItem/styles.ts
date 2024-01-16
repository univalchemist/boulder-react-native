import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { font, RH } from '@/utils'

export default StyleSheet.create({
  container: {
    paddingVertical: RH(16),
    borderBottomWidth: RH(1),
    borderBottomColor: Colors.Grey.Lighter,
  },
  name: {
    ...font('regular', 14, Colors.Primary.Dark),
  },
  role: {
    ...font('regular', 14, Colors.Primary.Light),
  },
  email: {
    ...font('regular', 14, Colors.Primary.Light),
  },
})
