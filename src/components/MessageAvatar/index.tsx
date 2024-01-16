import React, { useMemo } from 'react'
import { ImageStyle } from 'react-native'

import { IMessage } from '@/types'

import { AvatarProps } from './types'
import Container from '../Container'
import styles from './styles'
import Avatar from '../Avatar'
import { isSameDay, isSameUser } from '@/utils'

export const MessageAvatar = <TMessage extends IMessage = IMessage>({
  renderAvatarOnTop = true,
  showAvatarForEveryMessage,
  containerStyle,
  position,
  currentMessage,
  previousMessage,
  nextMessage,
  imageStyle,
  renderAvatar,
  onPressAvatar,
  onLongPressAvatar,
}: AvatarProps<TMessage>) => {
  const messageToCompare = renderAvatarOnTop ? previousMessage : nextMessage
  const computedStyle = renderAvatarOnTop ? 'onTop' : 'onBottom'

  const renderAvatarComponent = useMemo(() => {
    if (currentMessage) {
      return (
        <Avatar
          avatarStyle={[styles[position].image, imageStyle && imageStyle[position]] as ImageStyle}
          user={currentMessage.user}
          onPress={() => onPressAvatar?.(currentMessage?.user)}
          onLongPress={() => onLongPressAvatar?.(currentMessage?.user)}
        />
      )
    }

    return null
  }, [currentMessage, imageStyle, onLongPressAvatar, onPressAvatar, position])

  if (renderAvatar === null) {
    return null
  }

  if (
    !showAvatarForEveryMessage &&
    currentMessage &&
    messageToCompare &&
    isSameUser(currentMessage, messageToCompare) &&
    isSameDay(currentMessage, messageToCompare)
  ) {
    return (
      <Container style={[styles[position].container, containerStyle && containerStyle[position]]}>
        <Avatar
          avatarStyle={[styles[position].image, imageStyle && imageStyle[position]] as ImageStyle}
        />
      </Container>
    )
  }

  return (
    <Container
      style={[
        styles[position].container,
        styles[position][computedStyle],
        containerStyle && containerStyle[position],
      ]}
    >
      {renderAvatarComponent}
    </Container>
  )
}

export default MessageAvatar
