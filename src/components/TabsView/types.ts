import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { ITab } from '@/types'

export interface ITabsViewProps {
  style?: StyleProp<ViewStyle>
  initial?: number
  tabs: ITab<string>[]
  sceneMap: {
    [x: string]: () => React.ReactNode
  }
  renderLabel?: ({ route, focused }: { route: any; focused: boolean }) => React.ReactNode
  onTabChange?: (_index: number) => void
}
