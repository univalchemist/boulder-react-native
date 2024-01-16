import { StyleSheet } from 'react-native'

import { FONT_MAP, Colors } from '@/constants'
import { font } from '@/utils'

export default StyleSheet.create({
  text: {
    // textAlign: 'left',
    color: Colors.Primary.Dark,
    fontFamily: FONT_MAP.regular,
  },
  readMore: {
    ...font('medium', 14, Colors.Pink.Default),
  },
})
