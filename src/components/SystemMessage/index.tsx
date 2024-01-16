import React from 'react'

import { Container, TextView } from '@/components'
import { IMessage } from '@/types/message'

import { SystemMessageProps } from './types'
import styles from './styles'

const SystemMessage = <TMessage extends IMessage>(props: SystemMessageProps<TMessage>) => {
  const { currentMessage, containerStyle, wrapperStyle, textStyle } = props

  if (currentMessage == null || !currentMessage.system) {
    return null
  }

  return (
    <Container style={[styles.container, containerStyle]}>
      <Container style={wrapperStyle}>
        <TextView style={[styles.text, textStyle]}>{currentMessage.text}</TextView>
      </Container>
    </Container>
  )
}

export default SystemMessage
