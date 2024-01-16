import { Animated } from 'react-native'

// eslint-disable-next-line prettier/prettier
export interface ChatProps { }

export interface ChatState {
  isInitialized: boolean
  composerHeight?: number
  messagesContainerHeight?: number | Animated.Value
  typingDisabled: boolean
}
