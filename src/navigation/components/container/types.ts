import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface INavContainerProps {
  headerStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  left?: React.ReactNode
  right?: React.ReactNode
  title?: string
  hasBack?: boolean
  children?: React.ReactNode
  onBack?: () => void
}
