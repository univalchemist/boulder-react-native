import React from 'react'
import { View } from 'react-native'
import { Trans } from 'react-i18next'

import { IEvent } from '@/types'
import { Icon, Container, TextView } from '@/components'

import styles from './styles'

interface Props {
  data: IEvent
}

const EventBasicInfo: React.FC<Props> = ({ data }) => {
  const organizer = data.attendees.find((a) => a.role === 'organizer')
  if (!organizer) return null

  return (
    <Container row={false} gap={12}>
      <Container gap={20} alignItems="center">
        <Icon name="blue-dot" />
        <Container row={false} gap={4} style={styles.informationContainer}>
          <TextView style={styles.eventName}>{data.name}</TextView>
          <Trans
            i18nKey="eventOrganizer"
            values={{ label: organizer.email }}
            components={{
              tag1: <TextView style={styles.eventOrganizer} />,
              tag2: <TextView style={styles.eventOrganizerLabel} />,
            }}
          />
        </Container>
      </Container>
      <Container gap={20} alignItems="center">
        <View style={styles.iconSpace} />
        <TextView style={styles.eventDescription} maxLength={100}>
          {data.description}
        </TextView>
      </Container>
    </Container>
  )
}

export default EventBasicInfo
