import { StyleSheet } from 'react-native'

import { RW, font } from '@/utils'
import { SCREEN_HEIGHT, SCREEN_WIDTH, Colors } from '@/constants'

export const logoContainerDim = RW(325)

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'relative',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBgContainer: {
    position: 'relative',
    width: RW(325),
    height: RW(325),
  },
  logoBg: {
    width: RW(325),
    height: RW(325),
    resizeMode: 'center',
  },
  logoContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    top: RW(68),
  },
  logo: {
    width: RW(77),
    height: RW(77),
    resizeMode: 'contain',
  },
  splashTitle: {
    ...font('semibold', 28, Colors.Primary.Dark, 32),
    textAlign: 'center',
    marginTop: RW(12),
  },
  splashDesc: {
    ...font('regular', 14, Colors.Primary.Dark, 20),
    textAlign: 'center',
    marginTop: RW(12),
    width: '80%',
  },
})
