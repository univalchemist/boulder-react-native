import { StyleSheet } from 'react-native'
import { font } from '@/utils'
import { Colors } from '@/constants'

export default StyleSheet.create({
  avatarItem: {
    borderRadius: 100,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    borderRadius: 100,
    resizeMode: 'contain',
    zIndex: 1,
  },
  userName: {
    ...font('medium', 12, Colors.WHITE),
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
  },
  hasMore: {
    ...font('regular', 12, Colors.Primary.Light),
  },
  avatarIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 2,
  },
})
