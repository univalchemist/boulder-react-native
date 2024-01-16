import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { HORIZONTAL_PADDING, RH } from '@/utils'
import { HEADER_HEIGHT } from '@/navigation/constants'

export default StyleSheet.create({
  container: {
    height: '100%',
    position: 'absolute',
    backgroundColor: Colors.Pink.Light,
    paddingTop: HEADER_HEIGHT,
    paddingBottom: RH(24),
  },
  header: {
    backgroundColor: Colors.TRANSPARENT,
  },
  inputArea: {
    width: '100%',
    paddingBottom: RH(25),
    paddingHorizontal: HORIZONTAL_PADDING,
  },
})
