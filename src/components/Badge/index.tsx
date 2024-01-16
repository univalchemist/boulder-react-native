import React from 'react'

import Container from '../Container'
import TextView from '../TextView'
import { IBadgeProps } from './types'
import styles from './styles'

export const Badge: React.FC<IBadgeProps> = ({ count, style, ...rest }) => {
  return (
    <Container
      alignItems="center"
      justifyContent="center"
      style={[styles.container, style]}
      {...rest}
    >
      <TextView style={styles.text}>{count}</TextView>
    </Container>
  )
}

export default Badge
