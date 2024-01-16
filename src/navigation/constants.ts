import { StatusBar } from 'react-native'
import { IS_IOS } from '@/constants'
import { RH } from '@/utils'

export const STATUS_BAR = IS_IOS ? RH(45) : StatusBar.currentHeight || 0
export const NAV_HEADER = IS_IOS ? RH(56) : RH(60)
export const HEADER_HEIGHT = STATUS_BAR + NAV_HEADER + RH(5)
