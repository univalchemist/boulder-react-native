import React from 'react'

import { t } from '@/i18n'
import { IEvent } from '@/types'
import { Icon, Container, TextView } from '@/components'

import styles from './styles'

interface Props {
  data: IEvent
}

const EventSeats: React.FC<Props> = ({ data }) => {
  return (
    <Container row={false} gap={12}>
      <Container gap={20} alignItems="center">
        <Icon name="user" />
        <Container row={false} gap={4} style={styles.informationContainer}>
          <TextView style={styles.eventSeatsLabel}>{t('numberOfSeats')}</TextView>
          <TextView style={styles.eventSeats}>{data.seats}</TextView>
        </Container>
      </Container>
    </Container>
  )
}

export default EventSeats
