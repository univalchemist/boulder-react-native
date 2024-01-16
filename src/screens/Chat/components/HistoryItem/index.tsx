import React from 'react'

import { Container, TextView } from '@/components'

import { HistoryItemProps } from './types'
import styles from './styles'
import { IChatHistory } from '../HistoryModal/types'

export const HistoryItem = (props: HistoryItemProps) => {
  const { title, messages } = props

  return (
    <Container row={false} style={styles.container}>
      <TextView style={styles.title}>{title}</TextView>
      <Container row={false} style={styles.content}>
        {messages.map((message: IChatHistory, index: number) => (
          <Container
            key={message._id}
            row={false}
            style={[styles.item, index !== messages.length - 1 && styles.bottomBorder]}
          >
            <TextView style={styles.messageTitle}>{message.title}</TextView>
            <TextView style={styles.messageText}>{message.text}</TextView>
          </Container>
        ))}
      </Container>
    </Container>
  )
}

export default HistoryItem
