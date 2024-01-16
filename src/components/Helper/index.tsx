import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Animated, Easing, View, TouchableOpacity } from 'react-native'

import Container from '../Container'
import { IHelperProps, IHelperRef } from './types'
import styles from './styles'

export const Helper = forwardRef<IHelperRef, IHelperProps>(
  ({ show, closeOnInteraction, style, arrowStyle, content }, ref) => {
    const animRef = React.useRef(new Animated.Value(0))
    const timer = React.useRef<NodeJS.Timeout | null>(null)
    const [visible, setVisible] = useState<boolean>(false)
    const [render, setRender] = useState<boolean>(false)

    useEffect(() => {
      setVisible(!!show)
      setRender(!!show)
    }, [show])

    useEffect(() => {
      if (!visible) {
        timer.current = setTimeout(() => {
          setRender(false)
        }, 300)
      }

      return () => {
        if (timer.current) {
          clearTimeout(timer.current)
        }
      }
    }, [visible])

    useEffect(() => {
      Animated.timing(animRef.current, {
        duration: 250,
        toValue: visible ? 1 : 0,
        useNativeDriver: false,
        easing: Easing.ease,
      }).start()
    }, [visible])

    useImperativeHandle(
      ref,
      () => ({
        show: (_visible: boolean) => {
          setVisible(!!show)
          setRender(!!show)
        },
      }),
      [show],
    )

    if (!content || !render) return null

    return (
      <>
        <Animated.View
          style={[
            styles.container,
            {
              opacity: animRef.current.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
            style,
          ]}
        >
          <Container alignItems="center" justifyContent="center" style={styles.toolTipContainer}>
            <TouchableOpacity
              style={styles.contentWrapper}
              activeOpacity={1}
              onPress={() => (closeOnInteraction ? setVisible(false) : null)}
            >
              {content}
            </TouchableOpacity>
            <View style={[styles.triangle, arrowStyle]} />
          </Container>
        </Animated.View>
      </>
    )
  },
)

export default Helper
export type IHelper = React.ElementRef<typeof Helper>
