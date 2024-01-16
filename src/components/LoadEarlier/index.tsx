import React from 'react'
import { ActivityIndicatorComponent, TouchableOpacity } from 'react-native'

import Container from '../Container'
import TextView from '../TextView'

import styles from './styles'
import { LoadEarlierProps } from './types'
export function LoadEarlier({
  isLoadingEarlier = false,
  onLoadEarlier,
  label = 'Load earlier messages',
  containerStyle,
  wrapperStyle,
  textStyle,
  activityIndicatorColor = 'white',
  activityIndicatorSize = 'small',
  activityIndicatorStyle,
}: LoadEarlierProps): React.ReactElement {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onLoadEarlier}
      disabled={isLoadingEarlier}
      accessibilityRole="button"
    >
      <Container row={false} style={[styles.wrapper, wrapperStyle]}>
        {isLoadingEarlier ? (
          <Container row={false}>
            <TextView style={[styles.text, textStyle, { opacity: 0 }]}>{label}</TextView>
            <ActivityIndicatorComponent
              color={activityIndicatorColor!}
              size={activityIndicatorSize!}
              style={[styles.activityIndicator, activityIndicatorStyle]}
            />
          </Container>
        ) : (
          <TextView style={[styles.text, textStyle]}>{label}</TextView>
        )}
      </Container>
    </TouchableOpacity>
  )
}

export default LoadEarlier
