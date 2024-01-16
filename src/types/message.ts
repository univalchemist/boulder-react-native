import React from 'react'
import { StyleProp } from 'react-native'

type renderFunction = (x: any) => React.JSX.Element

export interface User {
  _id: string | number
  name?: string
  avatar?: string | number | renderFunction
  type?: 'system' | 'user'
}

export interface IMessage {
  _id: string | number
  text?: string
  title?: string
  clickableAction?: () => void
  clickableText?: string
  createdAt: Date | number
  user?: User
  image?: string
  video?: string
  audio?: string
  system?: boolean
  sent?: boolean
  received?: boolean
  pending?: boolean
}

export interface LeftRightStyle<T> {
  left?: StyleProp<T>
  right?: StyleProp<T>
}

export interface IComment {
  _id: string | number
  text?: string
  title?: string
  createdAt: Date | number
  user?: User
  image?: string
  video?: string
  audio?: string
  system?: boolean
  sent?: boolean
  received?: boolean
  pending?: boolean
  replies?: IComment[]
  isReplying?: boolean
}
