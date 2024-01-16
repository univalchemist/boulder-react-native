import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View, Animated, Easing, LayoutAnimation, UIManager } from 'react-native'

import { IS_IOS } from '@/constants'
import Container from '../Container'
import Button from '../Button'
import Icon from '../Icon'
import { IExpandableProps } from './types'
import styles from './styles'

export const Expandable: React.FC<IExpandableProps> = ({
  style,
  isExpanded,
  expandable,
  caption,
  children,
  onPress,
  ...rest
}) => {
  const spinRef = useRef(new Animated.Value(0))
  const [layoutHeight, setLayoutHeight] = useState<number | null>(0)

  useEffect(() => {
    if (!IS_IOS) {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }, [])

  useEffect(() => {
    if (isExpanded) {
      setLayoutHeight(null)
    } else {
      setLayoutHeight(0)
    }
  }, [isExpanded])

  useEffect(() => {
    Animated.timing(spinRef.current, {
      toValue: isExpanded ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start()
  }, [isExpanded])

  const _onPress = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    onPress()
  }, [onPress])

  return (
    <Container row={false} style={[styles.container, style]} {...rest}>
      <Button style={styles.button} onPress={_onPress}>
        {caption}
        <View style={styles.space} />
        {expandable && (
          <Animated.View
            style={{
              transform: [
                {
                  rotate: spinRef.current.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg'],
                  }),
                },
              ],
            }}
          >
            <Icon name="arrow-down" />
          </Animated.View>
        )}
      </Button>
      <Container row={false} style={[styles.wrapper, { height: layoutHeight }]}>
        {children}
      </Container>
    </Container>
  )
}

export default Expandable
