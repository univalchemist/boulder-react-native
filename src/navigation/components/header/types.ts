import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface INavHeaderProps {
  style?: StyleProp<ViewStyle>
  left?: React.ReactNode
  right?: React.ReactNode
  title?: string
  hasBack?: boolean
  onBack?: () => void
}

export interface INavButtonProps {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  onPress?: () => void
}
