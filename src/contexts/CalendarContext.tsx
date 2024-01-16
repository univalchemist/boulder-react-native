import React, { createContext, useCallback, useMemo, useState } from 'react'
import { type MarkedDates } from 'react-native-calendars/src/types'
import { IEvent } from '@/types'
import { formatDateTime } from '@/utils'

interface ICalendarContext {
  selectedDate: string
  events: IEvent[]
  markedDates: MarkedDates
  onSetEvents: (_events: IEvent[]) => void
  onChangeDate: (date: string) => void
  onAddEvent: (_data: IEvent[]) => void
  onUpdateEvent: (_id: string, _data: IEvent) => void
  onDeleteEvent: (_id: string) => void
}

export const CalendarContext = createContext<ICalendarContext>({
  selectedDate: formatDateTime(null, 'YYYY-MM-DD'),
  events: [],
  markedDates: {},
  onSetEvents: () => null,
  onChangeDate: () => null,
  onAddEvent: () => null,
  onUpdateEvent: () => null,
  onDeleteEvent: () => null,
})

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<string>(formatDateTime(null, 'YYYY-MM-DD'))
  const [events, setEvents] = useState<IEvent[]>([])

  const markedDates = useMemo(() => {
    const res: MarkedDates = {}
    events.forEach((event) => {
      res[formatDateTime(event.time, 'YYYY-MM-DD')] = { marked: true }
    })

    return res
  }, [events])

  const onAddEvent = useCallback((_data: IEvent[]) => {
    setEvents((prev) => [...prev, ..._data])
  }, [])

  const onUpdateEvent = useCallback(
    (_id: string, _data: IEvent) => {
      const newData = [...events].map((event) => {
        if (event.id === _id) {
          return _data
        }
        return event
      })
      setEvents(newData)
    },
    [events],
  )

  const onDeleteEvent = useCallback(
    (_id: string) => {
      const newData = [...events].filter((event) => event.id !== _id)
      setEvents(newData)
    },
    [events],
  )

  const value = useMemo(
    () => ({
      selectedDate,
      events,
      markedDates,
      onSetEvents: setEvents,
      onChangeDate: setSelectedDate,
      onAddEvent,
      onUpdateEvent,
      onDeleteEvent,
    }),
    [events, markedDates, onAddEvent, onDeleteEvent, onUpdateEvent, selectedDate],
  )

  return <CalendarContext.Provider value={value}>{children}</CalendarContext.Provider>
}
