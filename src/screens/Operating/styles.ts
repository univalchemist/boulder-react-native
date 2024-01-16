import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RH, font } from '@/utils'

export default StyleSheet.create({
  wrapper: {
    height: '100%',
    backgroundColor: Colors.WHITE,
  },
  content: {
    paddingBottom: RH(24),
  },
  inputArea: {
    paddingBottom: RH(25),
  },
  title: {
    paddingVertical: RH(14),
    ...font('medium', 18, Colors.Primary.Dark),
  },
  text: {
    ...font('regular', 14, Colors.Primary.Default, 20),
  },
  commentsContainer: {
    paddingTop: RH(16),
  },
  commentTitle: {
    ...font('medium', 18, Colors.Primary.Default, 24),
  },
  comments: {
    paddingTop: RH(16),
  },
  bubbleStyle: {
    backgroundColor: Colors.Grey.Lighter,
  },
})
