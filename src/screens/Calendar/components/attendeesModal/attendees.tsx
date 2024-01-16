import React from 'react'

import { ScrollContainer } from '@/components'
import { IEventAttendee } from '@/types'

import AttendeeItem from '../attendeeItem'
import styles from './styles'

interface Props {
  data: IEventAttendee[]
}

const Attendees: React.FC<Props> = ({ data }) => {
  return (
    <ScrollContainer style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {data.map((datum) => (
        <AttendeeItem key={datum.id} data={datum} />
      ))}
    </ScrollContainer>
  )
}

export default Attendees
