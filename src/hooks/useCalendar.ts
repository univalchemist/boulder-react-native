import { useContext } from 'react'

import { CalendarContext } from '@/contexts'

export const useCalendar = () => useContext(CalendarContext)
