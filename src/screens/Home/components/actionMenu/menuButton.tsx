import React, { useEffect, useRef, useState } from 'react'
import { Animated, View } from 'react-native'

import { Badge, Button, Icon } from '@/components'
import { INotification, IOption, IPosition, TNotificationCategory } from '@/types'
import styles, { BUTTON_HEIGHT } from './styles'

interface Props {
  index: number
  open: boolean
  category: IOption<TNotificationCategory>
  active: boolean
  data: { unread: number; data: INotification[] }
  onPress: (
    _key: IOption<TNotificationCategory>,
    _data: INotification[],
    _pos: IPosition | null,
  ) => void
}

const MenuButton: React.FC<Props> = ({ index, open, category, active, data, onPress }) => {
  const animRef = React.useRef(new Animated.Value(0))
  const ref = useRef<View | null>(null)
  const [position, setPosition] = useState<IPosition | null>(null)

  useEffect(() => {
    Animated.spring(animRef.current, {
      delay: index * 30,
      toValue: open ? 1 : 0,
      speed: 100,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        ref.current?.measure((_x, _y, _w, _h, _px, _py) => {
          setPosition({
            top: BUTTON_HEIGHT + _py,
            left: _px + _w / 2,
          })
        })
      }
    })
  }, [index, open])

  return (
    <>
      <Animated.View
        ref={ref}
        style={[
          styles.menuButtonContainer,
          {
            transform: [{ scale: animRef.current }],
          },
        ]}
      >
        <Button
          style={[styles.menuButton, active && styles.activeMenuButton]}
          onPress={() => onPress(category, data.data, position)}
        >
          <Badge count={data.unread} style={styles.unread} />
          <Icon name={category.icon} />
        </Button>
      </Animated.View>
    </>
  )
}

export default MenuButton
