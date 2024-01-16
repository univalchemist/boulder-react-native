import React from 'react'
import { View } from 'react-native'

import { RH, RW } from '@/utils'
import { IContainerProps } from './types'
import styles from './styles'

export const Container: React.FC<IContainerProps> = ({
  style,
  row = true,
  reverse,
  gap = 0,
  alignItems,
  justifyContent,
  children,
  ...rest
}) => {
  return (
    <View
      style={[
        styles.container,
        row && styles.row,
        row && reverse && styles.rowReversed,
        !row && styles.col,
        !row && reverse && styles.colReversed,
        {
          gap: row ? RW(gap) : RH(gap),
          alignItems,
          justifyContent,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  )
}

export default Container
