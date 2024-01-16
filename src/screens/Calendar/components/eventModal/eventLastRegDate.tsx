import React from 'react'
import { View } from 'react-native'

import { t } from '@/i18n'
import { IEvent } from '@/types'
import { getEventDetailDateTime } from '@/utils'
import { Icon, Container, TextView } from '@/components'

import styles from './styles'

interface Props {
  data: IEvent
}

const EventLastRegDate: React.FC<Props> = ({ data }) => {
  const [date, time] = getEventDetailDateTime(data.time)

  return (
    <Container row={false} gap={12}>
      <Container gap={20} alignItems="center">
        <Icon name="calendar-o" />
        <Container row={false} gap={4} style={styles.informationContainer}>
          <TextView style={styles.eventLastRegDateLabel}>{t('lastRegDate')}</TextView>
          <Container gap={8} alignItems="center">
            <TextView style={styles.eventLastRegDate}>{date}</TextView>
            <View style={styles.eventTimeDot} />
            <TextView style={styles.eventLastRegDate}>{time}</TextView>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

export default EventLastRegDate
