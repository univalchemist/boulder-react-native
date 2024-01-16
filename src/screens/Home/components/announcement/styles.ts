import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RW, font } from '@/utils'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: RW(-50),
  },
  logoContainer: {
    position: 'relative',
    flex: 1,
    width: '100%',
  },
  helperArrow: {
    transform: [{ translateX: RW(42) }, { rotate: '15deg' }],
  },
  tooltipText: {
    ...font('medium', 14, Colors.BLACK),
    width: '100%',
    textAlign: 'center',
    backgroundColor: Colors.WHITE,
  },
  tooltipUpdates: {
    ...font('medium', 14, Colors.Green.Light),
  },
})
