import { ViewStyle, StyleProp, TextStyle, TextProps } from 'react-native'
import { IMessage } from '@/types'

export interface DayProps<TMessage extends IMessage = IMessage> {
  currentMessage?: TMessage
  nextMessage?: TMessage
  previousMessage?: TMessage
  containerStyle?: StyleProp<ViewStyle>
  wrapperStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  textProps?: TextProps
  dateFormat?: string
  inverted?: boolean
}
