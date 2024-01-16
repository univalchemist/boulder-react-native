import React from 'react'
import { ViewProps } from 'react-native'

export interface IExpandableProps extends ViewProps {
  isExpanded?: boolean
  expandable?: boolean
  caption?: React.ReactNode
  onPress: () => void
}
