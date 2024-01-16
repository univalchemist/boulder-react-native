import { ViewProps, FlexStyle } from 'react-native'

export interface IContainerProps extends ViewProps {
  gap?: number
  row?: boolean
  reverse?: boolean
  alignItems?: FlexStyle['alignItems']
  justifyContent?: FlexStyle['justifyContent']
}
