import { StyleSheet } from 'react-native'

import { RW } from '@/utils'
import { Colors } from '@/constants'

export const STEP_GAP = RW(30)
export const GAP_AVATAR_BUBBLE = RW(8)

export default {
  left: StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      marginLeft: RW(8),
      marginRight: 0,
      zIndex: 1,
      backgroundColor: Colors.WHITE,
      gap: GAP_AVATAR_BUBBLE,
    },
    childTreeBorder: {
      position: 'absolute',
      width: 30,
      height: 500,
      borderLeftWidth: 1,
      borderBottomWidth: 1,
      borderColor: Colors.Grey.Default,
      borderBottomLeftRadius: 12,
      zIndex: -9999,
      left: -(STEP_GAP + GAP_AVATAR_BUBBLE) / 2,
    },
  }),
  right: StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginLeft: 0,
      marginRight: RW(8),
    },
  }),
}
