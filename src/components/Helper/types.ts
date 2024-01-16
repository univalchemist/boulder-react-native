import React from 'react'
import { StyleProp, ViewProps, ViewStyle } from 'react-native'

export interface IHelperProps extends ViewProps {
  closeOnInteraction?: boolean
  show?: boolean
  content: React.ReactNode
  arrowStyle?: StyleProp<ViewStyle>
}

export interface IHelperRef {
  show: (_visible: boolean) => void
}
