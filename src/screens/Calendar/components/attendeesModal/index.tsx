/* eslint-disable react/no-unstable-nested-components */
import React, { useMemo } from 'react'

import { Modal, Container, TextView, Button, Icon, TabsView } from '@/components'
import { IEventAttendee, ITab } from '@/types'
import { t } from '@/i18n'
import { Colors } from '@/constants'

import Attendees from './attendees'
import styles from './styles'

interface Props {
  data: IEventAttendee[]
  visible: boolean
  onClose: () => void
}

const tabs: ITab<string>[] = [
  {
    key: 'all',
    title: 'All (9)',
  },
  {
    key: 'attending',
    title: 'Attending',
  },
  {
    key: 'un-attending',
    title: 'UnAttending',
  },
  {
    key: 'not-replied',
    title: 'NoReplied',
  },
]

const AttendeesModal: React.FC<Props> = ({ data, visible, onClose }) => {
  const [all, attending, unAttending, notReplied] = useMemo(() => {
    const _attending: IEventAttendee[] = []
    const _unAttending: IEventAttendee[] = []
    const _notReplied: IEventAttendee[] = []

    data.forEach((datum) => {
      if (datum.attending === true) {
        _attending.push(datum)
      } else if (datum.attending === false) {
        _unAttending.push(datum)
      } else {
        _notReplied.push(datum)
      }
    })

    return [data, _attending, _unAttending, _notReplied]
  }, [data])

  return (
    <Modal
      hasBackdrop
      closeOnOverlayTap
      swipeEnabled={false}
      overlayColor={Colors.OVERLAY}
      isVisible={visible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      modalStyle={styles.modal}
      onModalHide={onClose}
    >
      <Container row={false} style={styles.body}>
        <Container style={styles.titleContainer}>
          <TextView style={styles.title}>{t('allParticipants')}</TextView>
          <Button style={styles.closeBtn} onPress={onClose}>
            <Icon name="close" />
          </Button>
        </Container>
        <TabsView
          style={styles.attendeesContainer}
          tabs={tabs}
          sceneMap={{
            all: () => <Attendees data={all} />,
            attending: () => <Attendees data={attending} />,
            'un-attending': () => <Attendees data={unAttending} />,
            'not-replied': () => <Attendees data={notReplied} />,
          }}
          renderLabel={({ route, focused }) => (
            <Container gap={8} alignItems="center" style={styles.labelContainer}>
              {route.key === 'attending' && <Icon name="status-check" />}
              {route.key === 'un-attending' && <Icon name="status-close" />}
              {route.key === 'not-replied' && <Icon name="status-inactive" />}
              <TextView style={focused ? styles.focusedLabel : styles.tabLabel}>
                {route.key === 'all' && t('allWithCount', { count: all.length })}
                {route.key === 'attending' && attending.length}
                {route.key === 'un-attending' && unAttending.length}
                {route.key === 'not-replied' && notReplied.length}
              </TextView>
            </Container>
          )}
        />
      </Container>
    </Modal>
  )
}

export default AttendeesModal
