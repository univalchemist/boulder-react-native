import { StyleSheet } from 'react-native'

import { Colors } from '@/constants'
import { font, RH, RW } from '@/utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353339',
    paddingHorizontal: RW(16),
    paddingVertical: RH(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...font('bold', 18, Colors.WHITE, 28),
    textAlign: 'left',
    width: '100%',
    marginBottom: RH(20),
  },
  textField: {
    ...font('regular', 16, Colors.WHITE),
    width: '100%',
    borderWidth: RH(1),
    borderColor: Colors.WHITE,
    borderRadius: RW(3),
    paddingHorizontal: RW(5),
    paddingVertical: RH(5),
    marginBottom: RH(5),
    textAlign: 'left',
  },
  rtlInput: {
    textAlign: 'right',
  },
  button: {
    width: '100%',
    borderRadius: RW(5),
    backgroundColor: '#222126',
    paddingVertical: RH(10),
    marginTop: RH(15),
  },
  buttonText: {
    ...font('bold', 18, Colors.WHITE, 28),
    width: '100%',
    textAlign: 'center',
  },
})
