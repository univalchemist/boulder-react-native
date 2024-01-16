import { StyleSheet } from 'react-native'
import { RH, RW } from '@/utils'

export default StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: RH(8),
    paddingHorizontal: RW(12),
    gap: RW(8),
    minHeight: RH(32),
  },
  wrapper: {
    width: '100%',
    overflow: 'hidden',
  },
  space: {
    flex: 1,
  },
})
