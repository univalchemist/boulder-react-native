import { StyleSheet } from 'react-native'

import { Colors, SCREEN_WIDTH } from '@/constants'
import { RH, RW, font } from '@/utils'

export const LABEL_WIDTH = RW(200)

export default StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    paddingTop: RH(5),
    position: 'absolute',
    zIndex: 2,
  },
  legend: {
    alignSelf: 'center',
  },
  dataList: {
    flex: 1,
    marginTop: RH(20),
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: RW(16),
    borderTopRightRadius: RW(16),
    paddingHorizontal: RW(16),
    paddingVertical: RH(16),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RW(12),
    paddingVertical: RH(14),
  },
  itemContentContainer: {
    flex: 1,
  },
  itemIconContainer: {
    width: RW(40),
    height: RW(40),
    borderRadius: RH(40),
  },
  itemTitle: {
    ...font('medium', 14, Colors.Primary.Dark),
    flex: 1,
  },
  itemContent: {
    ...font('regular', 12, Colors.Primary.Light),
    flex: 1,
  },
  itemTime: {
    ...font('medium', 12, Colors.Typography.Default),
  },
  unreadDot: {
    width: RH(22),
    height: RH(22),
    borderRadius: 50,
    backgroundColor: '#FF2441',
  },
  menuTitle: {
    textAlign: 'center',
    width: LABEL_WIDTH,
    ...font('medium', 12, Colors.Primary.Dark),
  },
  totalCount: {
    backgroundColor: Colors.Green.Light,
    height: RW(20),
    minWidth: RW(20),
  },
  eventHeader: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: Colors.WHITE,
    paddingBottom: RH(4),
  },
})
