import React from 'react'
import { Container, TextView } from '@/components'
import styles from './styles'

interface Props {
  title: string
  count: string | number
}

export const SectionHeader = (props: Props) => {
  const { title, count } = props
  return (
    <Container justifyContent="space-between" style={styles.container}>
      <TextView style={styles.title}>{title}</TextView>
      <TextView style={styles.count}>{count}</TextView>
    </Container>
  )
}

export default SectionHeader
