import React from 'react'

import { Container } from '@/components'
import NavHeader from '../header'
import { INavContainerProps } from './types'
import styles from './styles'

export const NavContainer: React.FC<INavContainerProps> = ({
  style,
  headerStyle,
  hasBack,
  onBack,
  left,
  right,
  title,
  children,
}) => {
  return (
    <Container row={false} style={[styles.container, style]}>
      <NavHeader
        style={headerStyle}
        hasBack={hasBack}
        onBack={onBack}
        left={left}
        right={right}
        title={title}
      />
      {children}
    </Container>
  )
}

export default NavContainer
