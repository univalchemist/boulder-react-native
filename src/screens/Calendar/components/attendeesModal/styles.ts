import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RH, RW, font } from '@/utils'

export default StyleSheet.create({
  modal: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  body: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: RW(16),
    borderTopRightRadius: RW(16),
    paddingHorizontal: RW(16),
    paddingVertical: RH(16),
    width: '100%',
    height: '65%',
  },
  titleContainer: {
    position: 'relative',
  },
  title: {
    ...font('medium', 16, Colors.Primary.Dark),
    width: '100%',
    zIndex: 0,
    textAlign: 'center',
  },
  closeBtn: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
  },
  attendeesContainer: {
    flexGrow: 1,
    paddingTop: RH(24),
  },
  scrollContainer: {
    marginTop: RH(8),
    flex: 1,
  },
  labelContainer: {
    width: '100%',
  },
  tabLabel: {
    ...font('medium', 15, Colors.Primary.Normal),
    paddingHorizontal: RW(5),
  },
  focusedLabel: {
    ...font('medium', 15, Colors.Primary.Dark),
    paddingHorizontal: RW(5),
  },
})
