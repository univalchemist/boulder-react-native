import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface IModalizeProps {
  children: ReactNode
  height?: number
  withHandle?: boolean
  closeOnOverlayTap?: boolean
  title?: string
  modalStyle?: StyleProp<ViewStyle>
}

export interface IModalizeRef {
  open: () => void
  close: () => void
}
