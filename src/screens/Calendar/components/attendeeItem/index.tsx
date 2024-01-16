import React from 'react'
import { Trans } from 'react-i18next'
import { Container, TextView, Avatars } from '@/components'

import { IEventAttendee } from '@/types'
import { fullName } from '@/utils'

import styles from './styles'

interface Props {
  data: IEventAttendee
}

const AttendeeItem: React.FC<Props> = ({ data }) => {
  return (
    <Container gap={12} alignItems="center" style={styles.container}>
      <Avatars data={[data]} />
      <Container row={false} gap={2} style={{ flex: 1 }}>
        <Trans
          i18nKey={data.role === 'organizer' ? 'eventOrganizer' : 'eventAttendeeName'}
          values={{ label: fullName(data.firstName, data.lastName) }}
          components={{
            tag1: <TextView style={styles.name} />,
            tag2: <TextView style={styles.role} />,
          }}
        />
        <TextView style={styles.email}>{data.email}</TextView>
      </Container>
    </Container>
  )
}

export default AttendeeItem
