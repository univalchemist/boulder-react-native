import React, { useCallback, useMemo } from 'react'
import { TouchableWithoutFeedback } from 'react-native'

import { Icon } from '@/components'
import { RW, isSameDay, isSameUser } from '@/utils'
import { IMessage } from '@/types'
import { t } from '@/i18n'
import { useMessage } from '@/hooks'

import styles from './styles'
import { BubbleProps } from './types'
import MessageText from '../MessageText'
import Time from '../Time'
import Container from '../Container'
import TextView from '../TextView'

const Bubble = <TMessage extends IMessage = IMessage>(props: BubbleProps<TMessage>) => {
  const { onPress, position = 'left', currentMessage, nextMessage, previousMessage } = props

  const {
    onClickReply,
    state: { messageType, messageOptions },
  } = useMessage()

  const { renderUsernameOnMessage, fullWidth, bubbleStyle } = messageOptions

  const _onPress = useCallback(() => {
    if (onPress) {
      onPress(currentMessage)
    }
  }, [currentMessage, onPress])

  const isComment = useMemo(() => messageType === 'comment', [messageType])

  const styledBubbleToNext = useMemo(() => {
    if (
      currentMessage &&
      nextMessage &&
      position &&
      isSameUser(currentMessage, nextMessage) &&
      isSameDay(currentMessage, nextMessage) &&
      !isComment
    ) {
      return [styles[position].containerToNext]
    }
    return null
  }, [currentMessage, isComment, nextMessage, position])

  const styledBubbleToPrevious = useMemo(() => {
    if (
      currentMessage &&
      previousMessage &&
      position &&
      isSameDay(currentMessage, previousMessage) &&
      isSameDay(currentMessage, previousMessage) &&
      !isComment
    ) {
      return [styles[position].containerToPrevious]
    }
    return null
  }, [currentMessage, isComment, position, previousMessage])

  const renderMessageText = useMemo(() => {
    if (currentMessage && currentMessage.text) {
      return <MessageText {...props} />
    }
    return null
  }, [currentMessage, props])

  const renderMessageTitle = useMemo(() => {
    if (currentMessage && currentMessage?.title) {
      return (
        <Container row={false} style={styles.content.titleContainer}>
          <TextView style={styles.content.title}>{currentMessage.title}</TextView>
        </Container>
      )
    }
    return null
  }, [currentMessage])

  const renderMessageClick = useMemo(() => {
    if (currentMessage && currentMessage?.clickableText) {
      return (
        <Container row={false} style={styles.content.clickableTextContainer}>
          <TextView onPress={currentMessage?.clickableAction} style={styles.content.clickableText}>
            {currentMessage.clickableText}
          </TextView>
        </Container>
      )
    }
    return null
  }, [currentMessage])

  const renderTime = useMemo(() => {
    if (currentMessage && currentMessage.createdAt) {
      return <Time {...props} />
    }
    return null
  }, [currentMessage, props])

  const renderUsername = useMemo(() => {
    if (currentMessage && renderUsernameOnMessage && currentMessage.user?.name) {
      return (
        <Container row={false} style={styles.content.usernameView}>
          <TextView style={styles.content.username}>
            {currentMessage.user?.name}
            <Icon
              style={styles.content.userBadge}
              name="user-badge-available"
              width={RW(12)}
              height={RW(12)}
            />
          </TextView>
        </Container>
      )
    }
    return null
  }, [currentMessage, renderUsernameOnMessage])

  const _onClickReply = useCallback(
    () => onClickReply && onClickReply(currentMessage!),
    [currentMessage, onClickReply],
  )

  return (
    <Container row={false} style={styles[position].container}>
      <Container
        row={false}
        style={[
          styles[position].wrapper,
          styledBubbleToNext,
          styledBubbleToPrevious,
          fullWidth && { width: '100%' },
          bubbleStyle,
        ]}
      >
        <TouchableWithoutFeedback
          onPress={_onPress}
          accessibilityRole="text"
          {...props.touchableProps}
        >
          <Container row={false}>
            <Container row={false} style={styles[position].top}>
              {renderUsername}
              {renderTime}
            </Container>
            <Container row={false}>{renderMessageTitle}</Container>
            <Container row={false}>{renderMessageText}</Container>
            <Container row={false}>{renderMessageClick}</Container>
          </Container>
        </TouchableWithoutFeedback>
      </Container>
      {isComment && (
        <Container style={styles.content.commentAction} gap={RW(16)}>
          <TouchableWithoutFeedback>
            <TextView style={styles.content.commentActionText}>{t('comment.action.like')}</TextView>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={_onClickReply}>
            <TextView style={styles.content.commentActionText}>
              {t('comment.action.reply')}
            </TextView>
          </TouchableWithoutFeedback>
        </Container>
      )}
    </Container>
  )
}

export default Bubble
