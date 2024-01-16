import React, { useEffect, useState, useMemo } from 'react'
import { AgendaList } from 'react-native-calendars'
import { groupBy, sortBy } from 'lodash'

import { IEvent, ISectionItem } from '@/types'
import { formatDateTime, mockEvents } from '@/utils'
import { t } from '@/i18n'
import { TextView, EventHeader } from '@/components'
import { useCalendar } from '@/hooks'
import EventItem from './eventItem'
import EventModal from '../eventModal'

import styles from './styles'

const EventsList = () => {
  const { events, onSetEvents } = useCalendar()
  const [loading, setLoading] = useState<boolean>(false)
  const [selected, setSelected] = useState<IEvent | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)

  // Mock data for event
  useEffect(() => {
    if (!events.length) {
      setLoading(true)
      setTimeout(() => {
        const _events: IEvent[] = mockEvents(15)
        onSetEvents(_events)
        setLoading(false)
      }, 1000)
    }
  }, [events.length, onSetEvents])

  const eventsData: ISectionItem<IEvent>[] = useMemo(() => {
    const sorted = sortBy(events, (item) => formatDateTime(item.time, 'YYYY-MM-DD'))
    const group: Record<string, IEvent[]> = groupBy(sorted, (item) =>
      formatDateTime(item.time, 'YYYY-MM-DD'),
    )

    return Object.entries(group).map(([date, data]) => ({ title: date, data }))
  }, [events])

  if (loading) {
    return <TextView style={styles.loading}>{t('loading')}</TextView>
  }
  return (
    <>
      <AgendaList
        sections={eventsData}
        renderSectionHeader={(item) => <EventHeader date={item as unknown as string} />}
        renderItem={(item) => (
          <EventItem
            data={item.item}
            onPress={() => {
              setSelected(item.item)
              setShowModal(true)
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <EventModal visible={showModal} data={selected} onClose={() => setShowModal(false)} />
    </>
  )
}

export default EventsList
