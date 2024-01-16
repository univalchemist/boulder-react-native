import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RH, RW, font } from '@/utils'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: RW(16),
    paddingVertical: RH(60),
    flex: 1,
  },
  menusContainer: {
    width: '100%',
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  menuContainer: {
    width: '100%',
  },
  subMenuContainer: {
    paddingLeft: RW(41),
    paddingRight: RW(16),
  },
  finalMenu: {
    paddingLeft: RW(8),
  },
  title: {
    ...font('regular', 12, Colors.Primary.Dark, 16),
    paddingBottom: RH(4),
  },
  menuRow: {
    flex: 1,
  },
  menuTitle: {
    ...font('regular', 14, Colors.Primary.Dark, 20),
  },
  subMenuTitle: {
    ...font('regular', 12, Colors.Primary.Light, 16),
  },
  matched: {
    borderRadius: RW(8),
    paddingVertical: RH(8),
    paddingHorizontal: RW(12),
    backgroundColor: Colors.Grey.Light,
    color: Colors.Primary.Dark,
    overflow: 'hidden',
  },
  treeBranch: {
    position: 'absolute',
    bottom: RH(14),
    left: RW(-20),
  },
  finalBranch: {
    left: RW(-8),
  },
})
