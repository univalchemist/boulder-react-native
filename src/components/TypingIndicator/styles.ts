import { StyleSheet } from 'react-native'

import { RW } from '@/utils'
import { Colors } from '@/constants'

export default StyleSheet.create({
  container: {
    marginLeft: RW(8),
    width: RW(45),
    borderRadius: RW(15),
    backgroundColor: Colors.LeftBubbleBackground,
  },
})
