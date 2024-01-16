import React from 'react'

import { Container } from '@/components'
import { RW } from '@/utils'
import Logo from '@/assets/images/logo.svg'
import styles from './styles'

const Announcement: React.FC = () => {
  return (
    <Container row={false} justifyContent="center" alignItems="center" style={styles.logoContainer}>
      <Logo width={RW(185)} height={RW(185)} />
    </Container>
  )
}

export default Announcement
