import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { font, RH, RW } from '@/utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  body: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.WHITE,
  },
  scrollContainer: {
    width: '100%',
    paddingHorizontal: RW(16),
  },
  scrollContentContainer: {
    paddingVertical: RH(20),
  },
  informationContainer: {
    flex: 1,
  },
  eventName: {
    ...font('medium', 18, Colors.BLACK),
  },
  eventOrganizer: {
    ...font('regular', 14, Colors.Primary.Normal),
  },
  eventOrganizerLabel: {
    ...font('regular', 14, Colors.Primary.Light),
  },
  iconSpace: {
    width: RW(28),
  },
  eventDescription: {
    ...font('regular', 14, Colors.Primary.Light),
    flex: 1,
  },
  eventTimeText: {
    ...font('regular', 14, Colors.Primary.Normal),
  },
  eventTimeDot: {
    width: RH(4),
    height: RH(4),
    borderRadius: RH(4),
    backgroundColor: Colors.Grey.Default,
  },
  attendLabel: {
    paddingHorizontal: RW(16),
    paddingVertical: RH(10),
    borderRadius: RW(400),
    borderWidth: RW(1),
    borderColor: Colors.Grey.Light,
  },
  attending: {
    borderColor: Colors.TRANSPARENT,
    backgroundColor: Colors.Blue.Lighter,
  },
  eventAttendLabelText: {
    ...font('regular', 14, Colors.BLACK),
  },
  eventSeatsLabel: {
    ...font('regular', 14, Colors.Primary.Light),
  },
  eventSeats: {
    ...font('regular', 14, Colors.Primary.Dark),
  },
  eventLastRegDateLabel: {
    ...font('regular', 14, Colors.Primary.Light),
  },
  eventLastRegDate: {
    ...font('regular', 14, Colors.Primary.Dark),
  },
  eventAttendeesLabel: {
    ...font('medium', 16, Colors.Primary.Dark),
  },
  eventAttendeesLeftLabel: {
    ...font('regular', 16, Colors.Primary.Light),
  },
  viewAllAttendeesBtn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: RH(16),
  },
  viewAllAttendees: {
    ...font('medium', 14, Colors.Primary.Normal),
  },
})
