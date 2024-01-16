import React, { useCallback, useMemo, useRef } from 'react'
import { View } from 'react-native'

import { CommentInput, Container, MessageAvatar } from '@/components'
import { IComment, IMessage } from '@/types/message'
import { isSameUser } from '@/utils/message'
import { RH, RW } from '@/utils'
import { useAuth, useMessage } from '@/hooks'

import Bubble from '../Bubble'
import Day from '../Day'
import SystemMessage from '../SystemMessage'
import { MESSAGE_AVATAR_SIZE } from '../MessageAvatar/styles'

import { MessageProps } from './types'
import styles, { STEP_GAP } from './styles'
import { t } from '@/i18n'

const GAP = RH(10)

export const Message = <TMessage extends IMessage & IComment>(props: MessageProps<TMessage>) => {
  const {
    position = 'left',
    currentMessage,
    nextMessage,
    parentMessage,
    hasParent,
    step,
    showUserAvatar = false,
  } = props
  const viewRef = useRef<View>(null)
  const { user } = useAuth()
  const {
    coordinates,
    onItemLayout,
    state: { messageType, messageOptions },
  } = useMessage()
  const { inverted = true, showAvatarForEveryMessage } = messageOptions

  const isComment = useMemo(() => messageType === 'comment', [messageType])

  const renderBubble = useMemo(() => {
    if (currentMessage?.isReplying && isComment) {
      return (
        <CommentInput
          placeholder={t('comments.input.placeholder')}
          clearInput
          onSubmit={() => console.log('comment submit')}
        />
      )
    } else {
      return <Bubble {...props} />
    }
  }, [currentMessage?.isReplying, isComment, props])

  const renderDay = useMemo(() => {
    if (currentMessage && currentMessage.createdAt) {
      return <Day {...props} />
    }
    return null
  }, [currentMessage, props])

  const renderSystemMessage = useMemo(() => {
    return <SystemMessage {...props} />
  }, [props])

  const renderAvatar = useMemo(() => {
    if (
      user &&
      user?._id &&
      currentMessage &&
      currentMessage.user &&
      user._id === currentMessage.user._id &&
      !showUserAvatar &&
      !isComment
    ) {
      return null
    }

    if (currentMessage && currentMessage.user && currentMessage.user.avatar === null) {
      return null
    }

    return <MessageAvatar {...props} />
  }, [currentMessage, isComment, props, showUserAvatar, user])

  const sameUser = useMemo(
    () => isSameUser(currentMessage, nextMessage!),
    [currentMessage, nextMessage],
  )

  const measureMent = useMemo(() => {
    if (parentMessage && hasParent) {
      const currentEvent = coordinates.find((coord) => coord._id === currentMessage?._id)
      const parentEvent = coordinates.find((coord) => coord._id === parentMessage._id)
      let offset =
        (currentEvent?.coordinate.height ? currentEvent?.coordinate.height : 0) -
        MESSAGE_AVATAR_SIZE / 2
      let height =
        (currentEvent?.coordinate.y ?? 0) -
        (parentEvent?.coordinate.y ?? 0) -
        MESSAGE_AVATAR_SIZE / 2
      if (currentMessage?.isReplying) {
        offset = (currentEvent?.coordinate.height ?? 0) / 2
      }
      if (currentMessage?.isReplying) {
        height =
          (currentEvent?.coordinate.height ?? 0) / 2 +
          (currentEvent?.coordinate.y ?? 0) -
          (parentEvent?.coordinate.y ?? 0) -
          MESSAGE_AVATAR_SIZE
      }
      return { offset, height }
    }
    return { offset: 0, height: 0 }
  }, [coordinates, currentMessage, hasParent, parentMessage])

  const _onLayout = useCallback(() => {
    if (isComment && currentMessage) {
      viewRef.current?.measure((x, y, width, height, pageX, pageY) => {
        onItemLayout(currentMessage?._id, { x, y, width, height, pageX, pageY })
      })
    }
  }, [currentMessage, isComment, onItemLayout])

  return (
    <View onLayout={_onLayout} ref={viewRef}>
      {!isComment && renderDay}
      {currentMessage?.system && !isComment ? (
        renderSystemMessage
      ) : (
        <Container
          row={false}
          style={[
            styles[position].container,
            { paddingBottom: sameUser && !showAvatarForEveryMessage ? RH(2) : GAP },
            !inverted && { paddingBottom: GAP },
            { marginLeft: (step ?? 0) * RW(STEP_GAP) },
          ]}
        >
          {position === 'left' && !currentMessage?.isReplying && renderAvatar}
          {renderBubble}
          {position === 'right' && renderAvatar}
          {hasParent && isComment && (
            <Container
              style={[
                styles.left.childTreeBorder,
                {
                  bottom: measureMent.offset,
                  height: measureMent.height,
                },
              ]}
            />
          )}
        </Container>
      )}
    </View>
  )
}

export default Message
