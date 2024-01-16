import { IMessage } from '@/types'

export type MessagePosition = 'left' | 'right'

export interface MessageProps<TMessage extends IMessage> {
  key: any
  showUserAvatar?: boolean
  position: MessagePosition
  currentMessage?: TMessage
  nextMessage?: TMessage
  previousMessage?: TMessage
  parentMessage?: TMessage
  step?: number
  hasParent?: boolean
}
