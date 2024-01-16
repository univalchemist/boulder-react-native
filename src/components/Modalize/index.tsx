import React, { useImperativeHandle, forwardRef, useCallback } from 'react'
import { Modalize as RNModalize, useModalize } from 'react-native-modalize'
import { RH } from '@/utils'

import Container from '../Container'
import TextView from '../TextView'
import Icon from '../Icon'

import { IModalizeProps, IModalizeRef } from './types'
import styles from './styles'
import { useKeyboardEvent } from '@/hooks'

export const Modalize = forwardRef<IModalizeRef, IModalizeProps>((props, ref) => {
  const { height, withHandle = false, title, closeOnOverlayTap, modalStyle, children } = props
  const { ref: modalizeRef, open, close } = useModalize()
  const { keyboardHeight } = useKeyboardEvent()

  useImperativeHandle(ref, () => ({
    open() {
      open()
    },
    close() {
      close()
    },
  }))

  const handleClose = useCallback(() => close(), [close])

  return (
    <RNModalize
      ref={modalizeRef}
      withHandle={withHandle}
      modalStyle={[styles.modalStyle, modalStyle]}
      childrenStyle={[styles.childrenStyle]}
      closeOnOverlayTap={closeOnOverlayTap}
      adjustToContentHeight
      scrollViewProps={{
        scrollEnabled: false,
      }}
      keyboardAvoidingBehavior="padding"
      avoidKeyboardLikeIOS
      keyboardAvoidingOffset={-1000}
      modalTopOffset={keyboardHeight}
    >
      <Container row={false} style={[styles.container, { height: height ?? RH(524) }]}>
        <Container row={false} style={styles.header}>
          <TextView style={styles.title}>{title}</TextView>
          <Icon name="close" style={styles.closeIcon} onPress={handleClose} />
        </Container>
        <Container row={false} style={styles.content}>
          {children}
        </Container>
      </Container>
    </RNModalize>
  )
})

export type ModalHandle = React.ElementRef<typeof Modalize>
export default Modalize
