import React, { forwardRef, useImperativeHandle, useMemo, useState } from 'react'
import { SectionList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { groupBy, sortBy } from 'lodash'

import {
  INotification,
  IOption,
  IPosition,
  ISectionItem,
  NavigationProp,
  TNotificationCategory,
} from '@/types'
import { useNotification } from '@/hooks'
import { Container, EventHeader, TextView } from '@/components'
import { SCREEN_HEIGHT } from '@/constants'
import { formatDateTime } from '@/utils'
import NotificationItem from './notificationItem'
import { INotificationViewRef } from './types'
import styles, { LABEL_WIDTH } from './styles'

const NotificationView = forwardRef<INotificationViewRef, any>((_, ref) => {
  const navigation = useNavigation<NavigationProp>()
  const { onReadNotification } = useNotification()

  const [data, setData] = useState<INotification[]>([])
  const [category, setCategory] = useState<IOption<TNotificationCategory> | null>(null)
  const [pos, setPos] = useState<IPosition | null>(null)
  const [visible, setVisible] = useState<boolean>(false)

  useImperativeHandle(ref, () => ({
    show: (_category, _data, _pos) => {
      setCategory(_category)
      setData(_data)
      setPos(_pos)
      setVisible(true)
    },
    hide: () => {
      setData([])
      setPos(null)
      setVisible(false)
    },
  }))

  const notificationData: ISectionItem<INotification>[] = useMemo(() => {
    const sorted = sortBy(data, (item) => formatDateTime(item.time, 'YYYY-MM-DD'))
    const group: Record<string, INotification[]> = groupBy(sorted, (item) =>
      formatDateTime(item.time, 'YYYY-MM-DD'),
    )

    return Object.entries(group).map(([date, _data]) => ({ title: date, data: _data }))
  }, [data])

  if (!visible || !category || !pos) return null

  return (
    <Container
      row={false}
      style={[styles.container, { top: pos?.top || 0, height: SCREEN_HEIGHT - (pos?.top || 0) }]}
    >
      <TextView style={[styles.menuTitle, { left: (pos?.left || 0) - LABEL_WIDTH / 2 }]}>
        {category.label}
      </TextView>
      <Container style={styles.dataList}>
        <SectionList<INotification>
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
          sections={notificationData}
          renderSectionHeader={(item) => (
            <EventHeader date={item.section.title} style={styles.eventHeader} />
          )}
          renderItem={({ item }) => (
            <NotificationItem
              category={category.value}
              data={item}
              onPress={(_c, _item) => {
                onReadNotification(_item.id)
                if (_c === 'calendar') {
                  navigation.navigate('Calendar')
                }
                if (_c === 'news') {
                  navigation.navigate('NewsDetail', { title: 'New Customer Closed' })
                }
              }}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </Container>
  )
})

export default NotificationView
