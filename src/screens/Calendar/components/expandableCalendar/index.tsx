import React from 'react'
import { CalendarProvider as CProvider, ExpandableCalendar } from 'react-native-calendars'
import moment from 'moment'

import { useCalendar } from '@/hooks'
import { Colors, FONT_ELOQUIA_MEDIUM } from '@/constants'
import { normalizePixel } from '@/utils'
import EventsList from '../eventsList'
import styles from './styles'

interface Props {
  onMonthChange: (_d: string) => void
}

const Calendar: React.FC<Props> = ({ onMonthChange }) => {
  const { markedDates } = useCalendar()

  return (
    <CProvider date={moment().format('YYYY-MM-DD')}>
      <ExpandableCalendar
        hideArrows
        animateScroll
        allowSelectionOutOfRange
        disableAllTouchEventsForInactiveDays={false}
        hideExtraDays={false}
        disableAllTouchEventsForDisabledDays={false}
        style={styles.calendarContainer}
        headerStyle={styles.header}
        calendarStyle={styles.calendar}
        firstDay={0}
        markedDates={markedDates}
        onMonthChange={({ dateString }) => onMonthChange(dateString)}
        // onDayPress={({ dateString }) => onChangeDate(dateString)}
        closeOnDayPress={false}
        theme={{
          calendarBackground: Colors.WHITE,
          todayTextColor: Colors.Blue.Default,
          dayTextColor: Colors.Primary.Normal,
          selectedDayTextColor: Colors.WHITE,
          selectedDayBackgroundColor: Colors.Blue.Default,
          textDisabledColor: Colors.Primary.Normal,
          textInactiveColor: Colors.Primary.Normal,
          dotColor: Colors.Blue.Light,
          selectedDotColor: Colors.WHITE,
          monthTextColor: Colors.TRANSPARENT,
          textDayFontFamily: FONT_ELOQUIA_MEDIUM,
          textDayFontSize: normalizePixel(14),
          textDayFontWeight: '500',
          textDayHeaderFontFamily: FONT_ELOQUIA_MEDIUM,
          textDayHeaderFontSize: normalizePixel(12),
          textMonthFontFamily: FONT_ELOQUIA_MEDIUM,
        }}
      />
      <EventsList />
    </CProvider>
  )
}

export default Calendar
