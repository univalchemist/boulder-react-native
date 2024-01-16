import { IMessage, StackProps } from '@/types'
import { Animated } from 'react-native'

// eslint-disable-next-line prettier/prettier
export interface NewsProps extends StackProps<'News'> { }

export interface NewsState<TMessage extends IMessage = IMessage> {
  isInitialized: boolean
  composerHeight?: number
  messagesContainerHeight?: number | Animated.Value
  typingDisabled: boolean
  text?: string
  messages?: TMessage[]
  /* Typing Indicator state */
  isTyping?: boolean
}
