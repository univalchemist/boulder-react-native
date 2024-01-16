import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { faker } from '@faker-js/faker'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

import { INotification, TNotificationCategory } from '@/types'

interface INotificationContext {
  notifications: INotification[]
  byCategory: Record<TNotificationCategory, { unread: number; data: INotification[] }>
  totalUnread: number
  onSetEvents: (_events: INotification[]) => void
  onReadNotification: (_id: string) => void
}

export const NotificationContext = createContext<INotificationContext>({
  notifications: [],
  byCategory: {
    kpis: { unread: 0, data: [] },
    news: { unread: 0, data: [] },
    calendar: { unread: 0, data: [] },
    operations: { unread: 0, data: [] },
  },
  totalUnread: 0,
  onSetEvents: () => null,
  onReadNotification: () => null,
})

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<INotification[]>([])

  // Mock only
  useEffect(() => {
    if (!notifications.length) {
      const createNotifications = () => {
        return {
          id: uuidv4(),
          title: faker.lorem.sentence(5),
          content: faker.lorem.sentences(2),
          read: faker.number.int({ min: 0, max: 15 }) % 3 === 0,
          category: faker.helpers.shuffle([
            'kpis',
            'news',
            'calendar',
            'operations',
          ])[0] as TNotificationCategory,
          time: moment()
            .add(faker.number.int({ min: 0, max: 7 }), 'days')
            .add(faker.number.int({ min: 0, max: 10 }), 'hours')
            .format('YYYY-MM-DD HH:mm'),
        }
      }
      setTimeout(() => {
        const _notifications: INotification[] = faker.helpers.multiple(createNotifications, {
          count: 30,
        })
        _notifications.sort((a) => (a.read ? 1 : -1))
        setNotifications(_notifications)
      }, 1000)
    }
  }, [notifications.length])

  const [byCategory, totalUnread] = useMemo(() => {
    const _kpis: { unread: number; data: INotification[] } = { unread: 0, data: [] }
    const _news: { unread: number; data: INotification[] } = { unread: 0, data: [] }
    const _calendar: { unread: number; data: INotification[] } = { unread: 0, data: [] }
    const _operations: { unread: number; data: INotification[] } = { unread: 0, data: [] }
    notifications.forEach((n) => {
      if (n.category === 'kpis') {
        _kpis.data.push(n)
        if (!n.read) {
          _kpis.unread += 1
        }
      } else if (n.category === 'news') {
        _news.data.push(n)
        if (!n.read) {
          _news.unread += 1
        }
      } else if (n.category === 'calendar') {
        _calendar.data.push(n)
        if (!n.read) {
          _calendar.unread += 1
        }
      } else if (n.category === 'operations') {
        _operations.data.push(n)
        if (!n.read) {
          _operations.unread += 1
        }
      }
    })
    return [
      {
        kpis: _kpis,
        news: _news,
        calendar: _calendar,
        operations: _operations,
      },
      _kpis.unread + _news.unread + _calendar.unread + _operations.unread,
    ]
  }, [notifications])

  const onReadNotification = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item)),
    )
  }, [])

  const value = useMemo(
    () => ({
      notifications,
      byCategory,
      totalUnread,
      onSetEvents: setNotifications,
      onReadNotification,
    }),
    [byCategory, notifications, onReadNotification, totalUnread],
  )

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>
}
