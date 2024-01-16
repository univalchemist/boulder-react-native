import React, { useCallback, useMemo, useState } from 'react'
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  TouchableOpacity,
} from 'react-native'

import { Container, LoadEarlier, Message, TextView } from '@/components'
import { MessagePosition } from '@/components/Message/types'
import { IComment } from '@/types'
import TypingIndicator from '@/components/TypingIndicator'
import { useAuth, useMessage } from '@/hooks'

import styles from './styles'

import { MessageListProps, IScrollOption } from './types'
export const MessageList = (props: MessageListProps) => {
  const { forwardRef, clickableText, clickableAction } = props
  const {
    state: { messages, isTyping, messageType, messageOptions },
  } = useMessage()
  const { user } = useAuth()
  const {
    inverted,
    loadEarlier,
    scrollToBottomOffset,
    showAvatarForEveryMessage,
    renderUsernameOnMessage,
  } = messageOptions
  const [scrollOptions, setScrollOptions] = useState<IScrollOption>({
    showScrollBottom: false,
    hasScrolled: false,
  })

  const scrollTo = useCallback(
    (options: { animated?: boolean; offset: number }) => {
      if (forwardRef && forwardRef.current && options) {
        forwardRef.current.scrollToOffset(options)
      }
    },
    [forwardRef],
  )

  const scrollToBottom = useCallback(
    (animated: boolean = true) => {
      if (inverted) {
        scrollTo({ offset: 0, animated })
      } else if (forwardRef && forwardRef.current) {
        forwardRef.current!.scrollToEnd({ animated })
      }
    },
    [forwardRef, inverted, scrollTo],
  )

  const onLayoutList = useCallback(() => {
    if (!inverted && !!messages && messages!.length) {
      setTimeout(() => scrollToBottom && scrollToBottom(false), 15 * messages!.length)
    }
  }, [inverted, messages, scrollToBottom])

  const handleOnScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {
        nativeEvent: {
          contentOffset: { y: contentOffsetY },
          contentSize: { height: contentSizeHeight },
          layoutMeasurement: { height: layoutMeasurementHeight },
        },
      } = event
      if (inverted) {
        if (contentOffsetY > scrollToBottomOffset!) {
          setScrollOptions({ showScrollBottom: true, hasScrolled: true })
        } else {
          setScrollOptions({ showScrollBottom: false, hasScrolled: true })
        }
      } else {
        if (
          contentOffsetY < scrollToBottomOffset! &&
          contentSizeHeight - layoutMeasurementHeight > scrollToBottomOffset!
        ) {
          setScrollOptions({ showScrollBottom: true, hasScrolled: true })
        } else {
          setScrollOptions({ showScrollBottom: false, hasScrolled: true })
        }
      }
    },
    [inverted, scrollToBottomOffset],
  )

  const _keyExtractor = (item: any) => `${item._id}`

  const renderChatEmpty = useMemo(() => <Container style={styles.container} />, [])

  const _renderLoadEarlier = useMemo(() => {
    if (loadEarlier) {
      return <LoadEarlier />
    }
    return null
  }, [loadEarlier])

  const renderFooter = useMemo(() => {
    if (Platform.OS === 'web') {
      return null
    }
    return <TypingIndicator isTyping={isTyping || false} />
  }, [isTyping])

  const renderHeaderWrapper = useMemo(
    () => <Container style={styles.headerWrapper}>{_renderLoadEarlier}</Container>,
    [_renderLoadEarlier],
  )

  const renderScrollBottomComponent = useMemo(() => <TextView>V</TextView>, [])

  const renderScrollToBottomWrapper = useMemo(() => {
    return (
      <Container row={false} style={styles.scrollToBottomStyle}>
        <TouchableOpacity
          onPress={() => scrollToBottom()}
          hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
        >
          {renderScrollBottomComponent}
        </TouchableOpacity>
      </Container>
    )
  }, [renderScrollBottomComponent, scrollToBottom])

  const isComment = useMemo(() => messageType === 'comment', [messageType])

  const messageElement = useCallback(
    (
      message: IComment,
      parent: IComment,
      index: number,
      _messages: IComment[],
      elements: any[],
      step: number = 0,
    ) => {
      const previousMessage = (inverted ? _messages[index + 1] : _messages[index - 1]) || {}
      const nextMessage = (inverted ? _messages[index - 1] : _messages[index + 1]) || {}

      const hasParent = Boolean(parent && parent._id !== message._id)
      const messageProps = {
        key: message._id,
        currentMessage: {
          ...message,
        },
        previousMessage,
        inverted,
        nextMessage,
        parentMessage: parent,
        position: 'left' as MessagePosition,
        renderUsernameOnMessage,
        showAvatarForEveryMessage,
        hasParent,
        step,
      }
      const _elements = elements
      const hasReplies = Boolean(message.replies && message.replies.length)
      _elements.push(<Message {...messageProps} />)
      if (hasReplies) {
        const _step = step + 1
        message.replies!.forEach((reply: IComment, _index: number) => {
          return messageElement(reply, message, _index, message.replies!, _elements, _step)
        })
      }
      return _elements
    },
    [inverted, renderUsernameOnMessage, showAvatarForEveryMessage],
  )

  const _renderItem = ({ item, index }: any) => {
    if (messages && user) {
      if (isComment) {
        // if message is comment, must handle replies
        return <>{messageElement(item, item, index, messages, [], 0)}</>
      } else {
        const previousMessage = (inverted ? messages[index + 1] : messages[index - 1]) || {}
        const nextMessage = (inverted ? messages[index - 1] : messages[index + 1]) || {}

        const messageProps = {
          user,
          key: item._id,
          currentMessage: {
            ...item,
            clickableText: item.user._id === user._id ? '' : clickableText ?? '',
            clickableAction: () => clickableAction?.(item),
          },
          previousMessage,
          inverted,
          nextMessage,
          position: (item.user._id === user._id ? 'right' : 'left') as MessagePosition,
          renderUsernameOnMessage,
          showAvatarForEveryMessage,
        }
        return <Message {...messageProps} />
      }
    }
    return null
  }
  return (
    <Container row={false} style={styles.container}>
      <FlatList
        ref={forwardRef}
        data={messages}
        keyExtractor={_keyExtractor}
        inverted={inverted}
        renderItem={_renderItem}
        automaticallyAdjustContentInsets={false}
        style={styles.listStyle}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={renderChatEmpty}
        ListFooterComponent={inverted ? renderHeaderWrapper : renderFooter}
        ListHeaderComponent={inverted ? renderFooter : renderHeaderWrapper}
        onScroll={handleOnScroll}
        scrollEventThrottle={100}
        onEndReachedThreshold={0.1}
        onLayout={onLayoutList}
        showsVerticalScrollIndicator={false}
        // onEndReached={onEndReached}
      />
      {scrollOptions.showScrollBottom && renderScrollToBottomWrapper}
    </Container>
  )
}

export default MessageList
