import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RH, RW, font } from '@/utils'

export default StyleSheet.create({
  eventHeader: {
    width: '100%',
    paddingHorizontal: RW(16),
    paddingVertical: RH(12),
    backgroundColor: Colors.Grey.Lighter,
  },
  eventHeaderText: {
    ...font('regular', 12, Colors.Primary.Dark, 16),
    textTransform: 'uppercase',
  },
  eventHeaderDot: {
    width: RH(4),
    height: RH(4),
    borderRadius: RH(4),
    backgroundColor: Colors.Grey.Default,
    marginHorizontal: RW(8),
  },
  eventItemContainer: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: RW(16),
    paddingVertical: RH(16),
    borderBottomWidth: RH(1),
    borderBottomColor: Colors.Grey.Lighter,
  },
  eventTime: {
    ...font('regular', 12, Colors.BLACK),
    paddingTop: RH(1),
  },
  eventDetailContainer: {
    flex: 1,
  },
  eventDuration: {
    ...font('regular', 12, Colors.Primary.Light, 16),
  },
  eventName: {
    ...font('medium', 14, Colors.BLACK),
  },
  eventDescription: {
    ...font('regular', 12, Colors.Primary.Light, 16),
  },
  eventAttendees: {
    width: '100%',
    marginTop: RH(8),
  },
  loading: {
    ...font('regular', 14, Colors.Primary.Light),
    paddingVertical: RH(30),
    textAlign: 'center',
  },
})
