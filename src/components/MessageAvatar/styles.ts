import { StyleSheet } from 'react-native'

import { RW } from '@/utils'

export const MESSAGE_AVATAR_SIZE = RW(28)

export default {
  left: StyleSheet.create({
    container: {},
    onTop: {
      alignSelf: 'flex-start',
    },
    onBottom: {},
    image: {
      height: MESSAGE_AVATAR_SIZE,
      width: MESSAGE_AVATAR_SIZE,
      borderRadius: MESSAGE_AVATAR_SIZE / 2,
    },
  }),
  right: StyleSheet.create({
    container: {},
    onTop: {
      alignSelf: 'flex-start',
    },
    onBottom: {},
    image: {
      height: MESSAGE_AVATAR_SIZE,
      width: MESSAGE_AVATAR_SIZE,
      borderRadius: MESSAGE_AVATAR_SIZE / 2,
    },
  }),
}
