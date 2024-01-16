import React, { useMemo, useState } from 'react'
import { Container, TextView, Button } from '@/components'

import { IEvent } from '@/types'
import { t } from '@/i18n'

import AttendeeItem from '../attendeeItem'
import AttendeesModal from '../attendeesModal'

import styles from './styles'

interface Props {
  data: IEvent
}

const displayNum = 3

const EventAttendees: React.FC<Props> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const attendees = useMemo(
    () => data.attendees.sort((a) => (a.role === 'organizer' ? -1 : 1)),
    [data.attendees],
  )

  return (
    <>
      <Container row={false} gap={8}>
        <Container gap={4}>
          <TextView style={styles.eventAttendeesLabel}>{t('participants')}</TextView>
          {attendees.length > displayNum && (
            <TextView style={styles.eventAttendeesLeftLabel}>
              {t('countsLeft', { count: attendees.length - displayNum })}
            </TextView>
          )}
        </Container>
        <Container row={false} gap={0}>
          {attendees.slice(0, displayNum).map((item) => (
            <AttendeeItem key={item.id} data={item} />
          ))}
        </Container>
        {attendees.length > displayNum && (
          <Button style={styles.viewAllAttendeesBtn} onPress={() => setOpenModal(true)}>
            <TextView style={styles.viewAllAttendees}>{t('viewAllParticipants')}</TextView>
          </Button>
        )}
      </Container>
      <AttendeesModal visible={openModal} data={attendees} onClose={() => setOpenModal(false)} />
    </>
  )
}

export default EventAttendees
