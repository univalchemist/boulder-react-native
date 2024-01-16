import React, { useCallback } from 'react'
import { GestureResponderEvent, Keyboard, TouchableOpacity } from 'react-native'
import { IButtonProps } from './types'

export const Button: React.FC<IButtonProps> = ({
  style,
  children,
  loading,
  disabled,
  onPress,
  ...rest
}) => {
  const _onPress = useCallback(
    (e: GestureResponderEvent) => {
      e.persist()
      Keyboard.dismiss()
      setTimeout(() => onPress?.(e), 200)
    },
    [onPress],
  )

  return (
    <TouchableOpacity
      style={style}
      activeOpacity={0.75}
      disabled={disabled || loading}
      onPress={_onPress}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Button
