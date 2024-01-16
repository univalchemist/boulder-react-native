import { StyleProp, ViewStyle } from 'react-native'
import { IMessage, User } from '@/types'
export interface BubbleProps<TMessage extends IMessage> {
  user?: User
  touchableProps?: object
  renderUsernameOnMessage?: boolean
  inverted?: boolean
  position: 'left' | 'right'
  currentMessage?: TMessage
  nextMessage?: TMessage
  previousMessage?: TMessage
  fullWidth?: boolean
  bubbleStyle?: StyleProp<ViewStyle>
  onPress?(context?: any, message?: any): void
}
