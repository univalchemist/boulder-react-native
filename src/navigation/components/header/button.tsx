import React from 'react'

import { Button } from '@/components'
import { INavButtonProps } from './types'
import styles from './styles'

export const NavButton: React.FC<INavButtonProps> = ({ style, onPress, children }) => {
  return (
    <Button style={[styles.headerButton, style]} onPress={onPress}>
      {children}
    </Button>
  )
}

export default NavButton
