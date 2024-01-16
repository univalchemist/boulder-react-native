import { ViewStyle, StyleProp, TextStyle } from 'react-native'
import { IMessage } from '@/types'

export interface SystemMessageProps<TMessage extends IMessage> {
  currentMessage?: TMessage
  containerStyle?: StyleProp<ViewStyle>
  wrapperStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}
