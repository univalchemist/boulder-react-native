import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RH, RW, font } from '@/utils'
import { MESSAGE_AVATAR_SIZE } from '../MessageAvatar/styles'

const size = RH(44)

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    width: '100%',
    minHeight: RH(size),
    maxHeight: RW(100),
  },
  image: {
    height: MESSAGE_AVATAR_SIZE,
    width: MESSAGE_AVATAR_SIZE,
    borderRadius: MESSAGE_AVATAR_SIZE / 2,
  },
  inputContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.WHITE,
    borderRadius: RW(8),
    borderWidth: 1,
    borderColor: Colors.Grey.Light,
  },
  inputWrapper: {
    flex: 1,
    height: '100%',
  },
  input: {
    height: '100%',
    width: '100%',
    paddingLeft: RW(10),
    paddingTop: RH(12), // To align text at middle
    ...font('regular', 14, Colors.BLACK, 20),
  },
  soundBtn: {
    borderRadius: RW(8),
    width: RW(size),
    height: RW(size),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtn: {
    backgroundColor: Colors.Pink.Default,
    borderRadius: RW(8),
    width: RW(size),
    height: RW(size),
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    borderColor: Colors.Pink.Default,
    borderWidth: RW(1),
  },
})
