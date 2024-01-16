import React from 'react'
import { ScrollView } from 'react-native'

import { IScrollContainerProps } from './types'
import styles from './styles'

export const ScrollContainer: React.FC<IScrollContainerProps> = ({ style, children, ...rest }) => {
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      style={[styles.container, style]}
      {...rest}
    >
      {children}
    </ScrollView>
  )
}

export default ScrollContainer
