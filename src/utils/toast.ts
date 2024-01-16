import Toast, { ToastOptions } from 'react-native-root-toast'

import { ERROR, SUCCESS, WARNING, WHITE } from '@/constants'
import { Maybe } from '@/types'

const options: ToastOptions = {
  animation: true,
  delay: 0,
  duration: Toast.durations.LONG,
  hideOnPress: true,
  opacity: 1,
  position: Toast.positions.BOTTOM,
  shadow: true,
  textColor: WHITE,
}

export const TYPE = {
  ERROR,
  SUCCESS,
  WARNING,
}

export const showToast = (message: Maybe<string>, type: string) => {
  if (!message) return
  Toast.show(message, { ...options, backgroundColor: type })
}
