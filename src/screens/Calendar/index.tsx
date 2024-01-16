import React, { useState } from 'react'

import { NavButton, NavContainer } from '@/navigation'
import { Container, Icon } from '@/components'
import { CalendarProvider } from '@/contexts'
import { formatDateTime } from '@/utils'
import ExpandableCalendar from './components/expandableCalendar'
import styles from './styles'

const CalendarScreen = () => {
  const [title, setTitle] = useState<string>(formatDateTime(null, 'MMMM'))

  return (
    <CalendarProvider>
      <NavContainer
        hasBack
        title={title}
        style={styles.container}
        headerStyle={styles.header}
        right={
          <NavButton onPress={() => console.log('Open create modal')}>
            <Icon name="add" />
          </NavButton>
        }
      >
        <Container row={false} style={styles.body}>
          <ExpandableCalendar onMonthChange={(d: string) => setTitle(formatDateTime(d, 'MMMM'))} />
        </Container>
      </NavContainer>
    </CalendarProvider>
  )
}

export default CalendarScreen
