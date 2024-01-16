import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container, Icon, TextView } from '@/components'
import NavButton from './button'
import { INavHeaderProps } from './types'
import styles from './styles'

export const NavHeader: React.FC<INavHeaderProps> = ({
  style,
  hasBack,
  onBack,
  left,
  right,
  title,
}) => {
  const navigation = useNavigation()

  const _onBack = useCallback(() => {
    if (onBack) {
      onBack()
      return
    }
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }, [navigation, onBack])

  return (
    <Container
      alignItems="flex-end"
      justifyContent="space-between"
      style={[styles.container, styles.dropShadow, style]}
    >
      {hasBack && (
        <NavButton onPress={_onBack}>
          <Icon name="arrow-left" />
        </NavButton>
      )}
      {left}
      <View style={styles.space} />
      {!!title && <TextView style={styles.title}>{title}</TextView>}
      {right}
    </Container>
  )
}

export default NavHeader
