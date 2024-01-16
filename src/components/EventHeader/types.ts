import { TextStyle, ViewProps } from 'react-native'

export interface IEventHeaderProps extends ViewProps {
  date: string
  textStyle?: TextStyle
}
