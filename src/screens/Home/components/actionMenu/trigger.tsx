import React, { useCallback } from 'react'
import { Animated, Easing } from 'react-native'

import { Badge, Container, Icon } from '@/components'
import { NavButton } from '@/navigation'
import { RW } from '@/utils'

import styles from './styles'

interface Props {
  totalUnread: number
  open: boolean
  onToggle: () => void
}

const Trigger: React.FC<Props> = ({ totalUnread, open, onToggle }) => {
  const animRef = React.useRef(new Animated.Value(0))

  const _onToggle = useCallback(() => {
    Animated.timing(animRef.current, {
      duration: 200,
      toValue: open ? 0 : 1,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start(() => {
      onToggle()
    })
  }, [onToggle, open])

  return (
    <Container>
      {!open && totalUnread > 0 && (
        <Animated.View
          style={[
            styles.totalUnread,
            {
              opacity: animRef.current.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
              }),
            },
          ]}
        >
          <Badge count={totalUnread} />
        </Animated.View>
      )}
      <NavButton style={styles.menuToggleButton} onPress={_onToggle}>
        <Icon name={open ? 'close' : 'note-2'} width={RW(24)} height={RW(24)} />
      </NavButton>
    </Container>
  )
}

export default Trigger
