import { StyleSheet } from 'react-native'

import { RH, font } from '@/utils'
import { Colors } from '@/constants'

const TAB_HEIGHT = RH(40)

export default StyleSheet.create({
  title: {
    ...font('medium', 15, Colors.Primary.Dark),
  },
  tabIndicator: {
    backgroundColor: Colors.Blue.Default,
    height: RH(2),
    bottom: RH(-1),
  },
  tabBar: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.Grey.Lighter,
    backgroundColor: Colors.TRANSPARENT,
    elevation: 0,
  },
  tab: {
    height: TAB_HEIGHT,
    minHeight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
})
