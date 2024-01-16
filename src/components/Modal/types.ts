import React from 'react'
import { ViewStyle } from 'react-native'
import { SupportedAnimation } from 'react-native-modal'

export interface IModalProps {
  isVisible: boolean
  overlayColor?: string
  hasBackdrop?: boolean
  swipeEnabled?: boolean
  modalStyle?: ViewStyle
  children: React.ReactNode
  closeOnOverlayTap?: boolean
  animationIn?: SupportedAnimation
  animationOut?: SupportedAnimation
  onModalHide?: () => void
}
