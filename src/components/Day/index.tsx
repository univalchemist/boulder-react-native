import React from 'react'
import dayjs from 'dayjs'

import { DayProps } from './types'
import styles from './styles'
import { IMessage } from '@/types'
import { DATE_FORMAT } from '@/constants'
import { useApp } from '@/hooks'
import { isSameDay } from '@/utils'
import Container from '../Container'
import TextView from '../TextView'

function Day<TMessage extends IMessage = IMessage>({
  dateFormat = DATE_FORMAT,
  currentMessage,
  previousMessage,
  containerStyle,
  wrapperStyle,
  textStyle,
}: DayProps<TMessage>) {
  const { appLang } = useApp()

  if (currentMessage == null || isSameDay(currentMessage, previousMessage)) {
    return null
  }

  return (
    <Container style={[styles.container, containerStyle]}>
      <Container style={wrapperStyle}>
        <TextView style={[styles.text, textStyle]}>
          {dayjs(currentMessage.createdAt).locale(appLang).format(dateFormat)}
        </TextView>
      </Container>
    </Container>
  )
}

export default Day
