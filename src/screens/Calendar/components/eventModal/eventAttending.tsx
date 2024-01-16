import React from 'react'

import { IEvent } from '@/types'
import { Icon, Container, TextView } from '@/components'
import { t } from '@/i18n'
import { ME_MOCK } from '@/constants'

import styles from './styles'

interface Props {
  data: IEvent
}

const EventAttending: React.FC<Props> = ({ data }) => {
  const me = data.attendees.find((a) => a.email === ME_MOCK.email)
  if (!me) return null

  return (
    <Container row={false} gap={12}>
      <Container gap={20} alignItems="center">
        <Icon name="headphone" />
        <Container gap={8} style={styles.informationContainer}>
          <Container
            alignItems="center"
            gap={8}
            style={[styles.attendLabel, me.attending === true && styles.attending]}
          >
            {me.attending === true && <Icon name="status-check" />}

            <TextView style={styles.eventAttendLabelText}>{t('yesAttending')}</TextView>
          </Container>
          <Container
            alignItems="center"
            gap={8}
            style={[styles.attendLabel, me.attending === false && styles.attending]}
          >
            {me.attending === false && <Icon name="status-close" />}
            <TextView style={styles.eventAttendLabelText}>{t('no')}</TextView>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

export default EventAttending
