import React from 'react'
import { View } from 'react-native'

import { IEvent } from '@/types'
import { Icon, Container, TextView } from '@/components'
import { getEventHeaderDay } from '@/utils'

import styles from './styles'

interface Props {
  data: IEvent
}

const EventTime: React.FC<Props> = ({ data }) => {
  const [curDay, day] = getEventHeaderDay(data.time)

  return (
    <Container row={false} gap={12}>
      <Container gap={20} alignItems="center">
        <Icon name="clock" />
        <Container row={false} gap={4} style={styles.informationContainer}>
          <Container gap={8} alignItems="center">
            {!!curDay && (
              <>
                <TextView style={styles.eventTimeText}>{curDay}</TextView>
                <View style={styles.eventTimeDot} />
              </>
            )}
            <TextView style={styles.eventTimeText}>{day}</TextView>
          </Container>
          <TextView style={styles.eventTimeText}>{data.type || '-'}</TextView>
        </Container>
      </Container>
    </Container>
  )
}

export default EventTime
