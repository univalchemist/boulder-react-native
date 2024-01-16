import React, { useMemo } from 'react'
import { TouchableOpacity } from 'react-native'
import { INotification, TNotificationCategory } from '@/types'
import { Container, DateTime, Icon, TextView } from '@/components'
import styles from './styles'
import { Colors } from '@/constants'

interface Props {
  category: TNotificationCategory
  data: INotification
  onPress: (_c: TNotificationCategory, _item: INotification) => void
}

const NotificationItem: React.FC<Props> = ({ category, data, onPress }) => {
  const [icon, color] = useMemo(() => {
    if (data.category === 'kpis') {
      return ['kpi-menu', Colors.Blue.Lighter]
    }
    if (data.category === 'news') {
      return ['news-menu', Colors.Grey.Lighter]
    }
    if (data.category === 'calendar') {
      return ['calendar-menu', Colors.Pink.Light]
    }
    if (data.category === 'operations') {
      return ['operations-menu', Colors.Pink.Light]
    }

    return [undefined, Colors.TRANSPARENT]
  }, [data.category])

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.75}
      onPress={() => onPress(category, data)}
    >
      <Container
        alignItems="center"
        justifyContent="center"
        style={[styles.itemIconContainer, { backgroundColor: color }]}
      >
        <Icon name={icon} />
      </Container>

      <Container row={false} gap={4} justifyContent="center" style={styles.itemContentContainer}>
        <Container gap={4} alignItems="center">
          <TextView style={styles.itemTitle} numberOfLines={1}>
            {data.title}
          </TextView>
          <DateTime value={data.time} format="HH:mm" style={styles.itemTime} />
        </Container>
        <Container gap={8} alignItems="center">
          <TextView style={styles.itemContent} numberOfLines={1}>
            {data.content}
          </TextView>
          {/* <Badge count={12} style={styles.totalCount} /> */}
        </Container>
      </Container>
    </TouchableOpacity>
  )
}

export default NotificationItem
