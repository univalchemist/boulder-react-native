import React, { useCallback, useMemo, useState } from 'react'
import { TouchableOpacity } from 'react-native'

import Logo from '@/assets/images/logo.svg'
import { RW } from '@/utils'
import { AvatarProps } from './types'
import Container from '../Container'
import TextView from '../TextView'
import ImageView from '../ImageView'
import Color from './colors'
import styles from './styles'

const { carrot, emerald, peterRiver, wisteria, alizarin, turquoise, midnightBlue } = Color

const Avatar = (props: AvatarProps) => {
  const { onPress, onLongPress, avatarStyle, textStyle, user } = props
  const [avatarName, setAvatarName] = useState<string>()
  const [avatarColor, setAvatarColor] = useState<string>()

  const _setAvatarColor = useCallback(() => {
    const userName = (user && user.name) || ''
    const name = userName.toUpperCase().split(' ')
    if (name.length === 1) {
      setAvatarName(`${name[0].charAt(0)}`)
    } else if (name.length > 1) {
      setAvatarName(`${name[0].charAt(0)}${name[1].charAt(0)}`)
    } else {
      setAvatarName('')
    }

    let sumChars = 0
    for (let i = 0; i < userName.length; i += 1) {
      sumChars += userName.charCodeAt(i)
    }

    // inspired by https://github.com/wbinnssmith/react-user-avatar
    // colors from https://flatuicolors.com/
    const colors = [carrot, emerald, peterRiver, wisteria, alizarin, turquoise, midnightBlue]

    setAvatarColor(colors[sumChars % colors.length])
  }, [user])

  const renderAvatar = useMemo(() => {
    if (user) {
      if (typeof user.avatar === 'function') {
        return user.avatar([styles.avatarStyle, avatarStyle])
      } else if (user.type === 'system') {
        return <Logo width={RW(40)} height={RW(40)} style={[styles.avatarStyle, avatarStyle]} />
      } else if (typeof user.avatar === 'string') {
        return <ImageView source={{ uri: user.avatar }} style={[styles.avatarStyle, avatarStyle]} />
      } else if (typeof user.avatar === 'number') {
        return <ImageView source={user.avatar} style={[styles.avatarStyle, avatarStyle]} />
      }
    }
    return null
  }, [avatarStyle, user])

  const renderInitials = useMemo(() => {
    return <TextView style={[styles.textStyle, textStyle]}>{avatarName}</TextView>
  }, [avatarName, textStyle])

  if (!user || (!user.name && !user.avatar)) {
    // render placeholder
    return (
      <Container
        style={[styles.avatarStyle, styles.avatarTransparent, avatarStyle]}
        accessibilityRole="image"
      />
    )
  }
  if (user.avatar) {
    return (
      <TouchableOpacity
        disabled={!onPress}
        onPress={onPress}
        onLongPress={onLongPress}
        accessibilityRole="image"
      >
        {renderAvatar}
      </TouchableOpacity>
    )
  }

  _setAvatarColor()

  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.avatarStyle, { backgroundColor: avatarColor }, avatarStyle]}
      accessibilityRole="image"
    >
      {renderInitials}
    </TouchableOpacity>
  )
}

export default Avatar
