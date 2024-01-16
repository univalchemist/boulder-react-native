import { StyleSheet } from 'react-native'

import { RW, RH, normalizePixel } from '@/utils'
import { Colors } from '@/constants'

const { containerStyle } = StyleSheet.create({
  containerStyle: {
    marginLeft: RW(10),
    marginRight: RW(10),
    marginBottom: RH(5),
  },
})
const { textStyle } = StyleSheet.create({
  textStyle: {
    fontSize: normalizePixel(10),
    textAlign: 'right',
  },
})

export default {
  left: StyleSheet.create({
    container: {
      ...containerStyle,
    },
    text: {
      color: Colors.Primary.Light,
      ...textStyle,
    },
  }),
  right: StyleSheet.create({
    container: {
      ...containerStyle,
    },
    text: {
      color: Colors.WHITE,
      ...textStyle,
    },
  }),
}
