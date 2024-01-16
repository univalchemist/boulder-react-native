import { IMessage } from '@/types'

export interface TimeProps<TMessage extends IMessage> {
  position?: 'left' | 'right'
  currentMessage?: TMessage
  timeFormat?: string
}
