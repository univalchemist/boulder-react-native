import { ViewStyle, TextStyle, TextProps, StyleProp } from 'react-native'
import { IMessage, LeftRightStyle } from '@/types'

export interface MessageTextProps<TMessage extends IMessage> {
  position?: 'left' | 'right'
  optionTitles?: string[]
  currentMessage?: TMessage
  containerStyle?: LeftRightStyle<ViewStyle>
  textStyle?: LeftRightStyle<TextStyle>
  linkStyle?: LeftRightStyle<TextStyle>
  textProps?: TextProps
  customTextStyle?: StyleProp<TextStyle>
  parsePatterns?(linkStyle: TextStyle): any
}
