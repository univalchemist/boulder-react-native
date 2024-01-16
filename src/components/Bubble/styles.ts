import { StyleSheet } from 'react-native'

import { RW, RH, normalizePixel, font } from '@/utils'
import { Colors } from '@/constants'

export default {
  left: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
    },
    wrapper: {
      borderRadius: RW(15),
      backgroundColor: Colors.Blue.Lighter,
      marginRight: RW(40),
      minHeight: RH(20),
      justifyContent: 'flex-end',
      padding: RW(10),
    },
    containerToNext: {
      borderBottomLeftRadius: RW(3),
    },
    containerToPrevious: {
      borderTopLeftRadius: RW(3),
    },
    top: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  }),
  right: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end',
    },
    wrapper: {
      borderRadius: RW(15),
      backgroundColor: Colors.Blue.Default,
      marginLeft: RW(40),
      minHeight: RH(20),
      justifyContent: 'flex-end',
      padding: RW(10),
    },
    containerToNext: {
      borderBottomRightRadius: RW(3),
    },
    containerToPrevious: {
      borderTopRightRadius: RW(3),
    },
    top: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  }),
  content: StyleSheet.create({
    tick: {
      fontSize: normalizePixel(10),
      backgroundColor: Colors.TRANSPARENT,
      color: Colors.WHITE,
    },
    tickView: {
      flexDirection: 'row',
      marginRight: RW(10),
    },
    username: {
      left: 0,
      ...font('bold', 14, Colors.Primary.Dark, 20),
    },
    usernameView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    userBadge: {
      marginLeft: RW(12),
      marginBottom: RH(2),
    },
    titleContainer: {
      paddingVertical: RH(5),
    },
    title: {
      left: 0,
      ...font('bold', 14, Colors.Primary.Dark, 20),
    },
    clickableTextContainer: {
      paddingTop: RH(15),
    },
    clickableText: {
      left: 0,
      ...font('semibold', 14, Colors.Blue.Default, 20),
    },
    commentAction: {
      paddingTop: RH(12),
    },
    commentActionText: {
      ...font('medium', 12, Colors.Primary.Dark, 16),
    },
  }),
}
