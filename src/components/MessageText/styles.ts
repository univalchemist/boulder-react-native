import { StyleSheet } from 'react-native'

import { normalizePixel, RH } from '@/utils'

const { textStyle, image } = StyleSheet.create({
  textStyle: {
    fontSize: normalizePixel(16),
    lineHeight: RH(20),
    marginTop: RH(5),
  },
  image: {
    height: RH(100),
    resizeMode: 'stretch',
    borderRadius: RH(8),
  },
})

export default {
  left: StyleSheet.create({
    container: {},
    text: {
      color: 'black',
      ...textStyle,
    },
    link: {
      color: 'black',
      textDecorationLine: 'underline',
    },
    image: {
      ...image,
    },
  }),
  right: StyleSheet.create({
    container: {},
    text: {
      color: 'white',
      ...textStyle,
    },
    link: {
      color: 'white',
      textDecorationLine: 'underline',
    },
    image: {
      ...image,
    },
  }),
}
