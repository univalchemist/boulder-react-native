import React, { useCallback } from 'react'
import RNModal from 'react-native-modal'

import { SCREEN_HEIGHT, SCREEN_WIDTH, Colors } from '@/constants'

import { IModalProps } from './types'
import styles from './styles'

export const Modal: React.FC<IModalProps> = ({
  children,
  modalStyle,
  isVisible = false,
  hasBackdrop = false,
  swipeEnabled = true,
  animationIn = 'fadeIn',
  overlayColor = Colors.OVERLAY,
  onModalHide = () => null,
  animationOut = 'fadeOut',
  closeOnOverlayTap = true,
}) => {
  const onBackdropPressed = useCallback(() => {
    if (closeOnOverlayTap) onModalHide()
  }, [closeOnOverlayTap, onModalHide])

  return (
    <RNModal
      swipeThreshold={200}
      statusBarTranslucent
      isVisible={isVisible}
      animationInTiming={300}
      backdropColor={overlayColor}
      hasBackdrop={hasBackdrop}
      onModalHide={onModalHide}
      animationIn={animationIn}
      deviceWidth={SCREEN_WIDTH}
      animationOut={animationOut}
      onSwipeComplete={onModalHide}
      deviceHeight={SCREEN_HEIGHT + 100}
      style={[styles.modal, modalStyle]}
      onBackdropPress={onBackdropPressed}
      swipeDirection={swipeEnabled ? 'down' : undefined}
    >
      {children}
    </RNModal>
  )
}

export default Modal
