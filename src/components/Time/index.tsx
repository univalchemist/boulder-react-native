import React from 'react'

import { IMessage } from '@/types'

import { TimeProps } from './types'
import styles from './styles'
import Container from '../Container'
import TextView from '../TextView'
import { calculateAgoTime } from '@/utils'

const Time = <TMessage extends IMessage = IMessage>(props: TimeProps<TMessage>) => {
  const { position = 'left', currentMessage } = props

  if (currentMessage == null) {
    return null
  }

  return (
    <Container row={false} style={styles[position].container}>
      <TextView style={styles[position].text}>
        {calculateAgoTime(currentMessage.createdAt)}
      </TextView>
    </Container>
  )
}

export default Time
