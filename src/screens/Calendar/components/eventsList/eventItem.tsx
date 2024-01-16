import React from 'react'
import { TouchableOpacity } from 'react-native'

import { RH, formatDateTime, minutesToHRTimeStr } from '@/utils'
import { IEvent } from '@/types'
import { Avatars, Container, TextView } from '@/components'
import styles from './styles'

interface Props {
  data: IEvent
  onPress: () => void
}

const EventItem: React.FC<Props> = ({ data, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container alignItems="flex-start" gap={12} style={styles.eventItemContainer}>
        <Container row={false} gap={4}>
          <TextView style={styles.eventTime}>{formatDateTime(data.time, 'h:mm A')}</TextView>
          <TextView style={styles.eventDuration}>{minutesToHRTimeStr(data.duration)}</TextView>
        </Container>
        <Container row={false} gap={4} style={styles.eventDetailContainer}>
          <TextView style={styles.eventName}>{data.name}</TextView>
          {!!data.description && (
            <TextView style={styles.eventDescription}>{data.description}</TextView>
          )}
          <Avatars data={data.attendees} size={RH(36)} />
        </Container>
      </Container>
    </TouchableOpacity>
  )
}

export default EventItem
