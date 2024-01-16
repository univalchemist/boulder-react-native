import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RH } from '@/utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  body: {
    flex: 1,
  },
  calendarContainer: {
    marginTop: -RH(45),
    backgroundColor: Colors.WHITE,
    elevation: 5,
    shadowColor: Colors.SHADOW,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  calendar: {
    backgroundColor: Colors.WHITE,
  },
  header: {
    backgroundColor: Colors.WHITE,
    elevation: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
})
