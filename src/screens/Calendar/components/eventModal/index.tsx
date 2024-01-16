import React from 'react'

import { IEvent } from '@/types'
import { NavButton, NavContainer } from '@/navigation'
import { Modal, Icon, Container, ScrollContainer } from '@/components'
import EventBasicInfo from './eventBasicInfo'
import EventTime from './eventTime'
import EventAttending from './eventAttending'
import EventSeats from './eventSeats'
import EventLastRegDate from './eventLastRegDate'
import EventAttendees from './eventAttendees'

import styles from './styles'

interface Props {
  data: IEvent | null
  visible: boolean
  onClose: () => void
}

const EventModal: React.FC<Props> = ({ data, visible, onClose }) => {
  if (!data) return null

  return (
    <Modal
      isVisible={visible}
      swipeEnabled={false}
      animationIn="slideInUp"
      animationOut="slideOutDown"
    >
      <NavContainer
        style={styles.container}
        headerStyle={styles.header}
        left={
          <NavButton onPress={onClose}>
            <Icon name="close" />
          </NavButton>
        }
        right={
          <>
            <NavButton onPress={() => console.log('Edit event')}>
              <Icon name="edit-2" />
            </NavButton>
            <NavButton onPress={() => console.log('Delete event')}>
              <Icon name="trash" />
            </NavButton>
          </>
        }
      >
        <ScrollContainer
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}
        >
          <Container row={false} gap={24}>
            <EventBasicInfo data={data} />
            <EventTime data={data} />
            <EventAttending data={data} />
            <EventSeats data={data} />
            <EventLastRegDate data={data} />
            <EventAttendees data={data} />
          </Container>
        </ScrollContainer>
      </NavContainer>
    </Modal>
  )
}

export default EventModal
