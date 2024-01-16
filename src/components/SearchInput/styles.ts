import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { RW, RH, font } from '@/utils'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    position: 'relative',
    borderRadius: RW(12),
    paddingHorizontal: RW(12),
    paddingVertical: RH(12),
    borderWidth: RW(1),
    borderColor: Colors.Grey.Light,
  },
  focused: {
    borderColor: Colors.Blue.Default,
  },
  dropShadow: {
    elevation: 3,
    shadowColor: '#6577DA',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  input: {
    verticalAlign: 'middle',
    ...font('regular', 14, Colors.Primary.Dark),
    textAlign: 'left',
    flex: 1,
  },
})
