import React from 'react'
import { View } from 'react-native'

import { getEventHeaderDay } from '@/utils'
import { Container, TextView } from '@/components'
import { IEventHeaderProps } from './types'
import styles from './styles'

export const EventHeader: React.FC<IEventHeaderProps> = ({ date, style, textStyle, ...rest }) => {
  const [curDay, day] = getEventHeaderDay(date)

  return (
    <Container alignItems="center" style={[styles.eventHeader, style]} {...rest}>
      {!!curDay && <TextView style={[styles.eventHeaderText, textStyle]}>{curDay}</TextView>}
      {!!curDay && !!day && <View style={styles.eventHeaderDot} />}
      {!!day && <TextView style={[styles.eventHeaderText, textStyle]}>{day}</TextView>}
    </Container>
  )
}

export default EventHeader
