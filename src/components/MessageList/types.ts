import { RefObject } from 'react'
import { IMessage } from '@/types'
import { FlatList, LayoutChangeEvent } from 'react-native'

export interface MessageListProps {
  forwardRef?: RefObject<FlatList<IMessage>>
  clickableText?: string
  clickableAction?: (item?: any) => void
}

export interface IScrollOption {
  showScrollBottom: boolean
  hasScrolled: boolean
}

export interface CoordinateObject {
  _id: number | string
  coordinate: LayoutChangeEvent
}
