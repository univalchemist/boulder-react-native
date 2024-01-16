import { StyleSheet } from 'react-native'

import { SCREEN_WIDTH, Colors } from '@/constants'

const styles = StyleSheet.create({
  modal: {
    backgroundColor: Colors.TRANSPARENT,
    borderRadius: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    paddingVertical: 0,
  },
  wrapper: {
    borderWidth: 2,
    borderColor: 'red',
    height: '100%',
    width: SCREEN_WIDTH,
  },
})

export default styles
