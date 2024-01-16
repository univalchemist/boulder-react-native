import React from 'react'

import { DividerProps } from './types'
import Container from '../Container'

import styles from './styles'

function Divider({ containerStyle }: DividerProps) {
  return <Container style={[styles.container, containerStyle]} />
}

export default Divider
