import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { KeyboardAvoidingView, LayoutChangeEvent, Platform } from 'react-native'

import { Container, Icon, MessageInput, MessageList } from '@/components'
import { useMessage } from '@/hooks'
import { MIN_COMPOSER_HEIGHT, MIN_INPUT_TOOLBAR_HEIGHT, TEST_ID } from '@/constants'
import { _user1, _user2 } from '@/data'
import { t } from '@/i18n'
import { NavButton, NavContainer } from '@/navigation'
import { mockMessage } from '@/utils'
import ChatHistoryModal, { ChatHistoryModalHandle } from '../HistoryModal'
import { ChatState } from './types'
import styles from './styles'

export const ChatList = () => {
  const { fetchData, appendMessage, setMessageOptions } = useMessage()

  const keyboardHeightRef = useRef(0)
  const bottomOffsetRef = useRef(0)
  const maxHeightRef = useRef<number | undefined>(undefined)
  const isFirstLayoutRef = useRef(true)
  const modalRef = useRef<ChatHistoryModalHandle>(null)

  const [state, setState] = useState<ChatState>({
    isInitialized: false, // initialization will calculate maxHeight before rendering the chat
    composerHeight: MIN_COMPOSER_HEIGHT,
    messagesContainerHeight: undefined,
    typingDisabled: false,
  })

  const calculateInputToolbarHeight = useCallback((composerHeight: number) => {
    const getMinInputToolbarHeight = MIN_INPUT_TOOLBAR_HEIGHT

    return composerHeight + (getMinInputToolbarHeight! - MIN_COMPOSER_HEIGHT!)
  }, [])

  /**
   * Returns the height, based on current window size, without taking the keyboard into account.
   */
  const getBasicMessagesContainerHeight = useCallback(
    (composerHeight = state.composerHeight) => {
      return maxHeightRef.current! - calculateInputToolbarHeight(composerHeight!)
    },
    [calculateInputToolbarHeight, state.composerHeight],
  )

  const getKeyboardHeight = useCallback(() => {
    if (Platform.OS === 'android') {
      // For android: on-screen keyboard resized main container and has own height.
      // @see https://developer.android.com/training/keyboard-input/visibility.html
      // So for calculate the messages container height ignore keyboard height.
      return 0
    }

    return keyboardHeightRef.current
  }, [])

  /**
   * Returns the height, based on current window size, taking the keyboard into account.
   */
  const getMessagesContainerHeightWithKeyboard = useCallback(
    (composerHeight = state.composerHeight) => {
      return (
        getBasicMessagesContainerHeight(composerHeight) -
        getKeyboardHeight() +
        bottomOffsetRef.current
      )
    },
    [getBasicMessagesContainerHeight, getKeyboardHeight, state.composerHeight],
  )

  const onInitialLayoutViewLayout = useCallback(
    (e: any) => {
      const { layout } = e.nativeEvent

      if (layout.height <= 0) {
        return
      }

      maxHeightRef.current = layout.height

      const newMessagesContainerHeight = getMessagesContainerHeightWithKeyboard(MIN_COMPOSER_HEIGHT)

      setState((prev) => ({
        ...prev,
        isInitialized: true,
        composerHeight: MIN_COMPOSER_HEIGHT,
        messagesContainerHeight: newMessagesContainerHeight,
      }))
    },
    [getMessagesContainerHeightWithKeyboard],
  )

  const onMainViewLayout = useCallback(
    (e: LayoutChangeEvent) => {
      // TODO: fix an issue when keyboard is dismissing during the initialization
      const { layout } = e.nativeEvent

      if (maxHeightRef.current !== layout.height || isFirstLayoutRef.current === true) {
        maxHeightRef.current = layout.height

        setState((prev) => ({
          ...prev,
          messagesContainerHeight:
            keyboardHeightRef.current > 0
              ? getMessagesContainerHeightWithKeyboard()
              : getBasicMessagesContainerHeight(),
        }))
      }

      if (isFirstLayoutRef.current === true) {
        isFirstLayoutRef.current = false
      }
    },
    [getBasicMessagesContainerHeight, getMessagesContainerHeightWithKeyboard],
  )

  // For temporary
  const handleMockResponse = useCallback(() => {
    appendMessage(mockMessage(1), _user2)
  }, [appendMessage])

  const onHandleSend = useCallback(
    (message: string) => {
      appendMessage(message, _user1)
      setTimeout(() => handleMockResponse(), 3000)
    },
    [appendMessage, handleMockResponse],
  )

  const _inputToolbar = useMemo(
    () => (
      <MessageInput
        placeholder={t('message.input.placeholder')}
        onSubmit={onHandleSend}
        clearInput
      />
    ),
    [onHandleSend],
  )

  const _loadingElement = useMemo(() => null, [])

  // useEffect
  useEffect(() => fetchData('message'), [fetchData])
  useEffect(() => {
    setMessageOptions({ inverted: true })
  }, [setMessageOptions])

  if (state.isInitialized) {
    return (
      <NavContainer
        hasBack
        right={
          <NavButton onPress={() => modalRef.current?.open()}>
            <Icon name="chat-history" />
          </NavButton>
        }
      >
        <Container row={false} style={styles.container}>
          <Container row={false} style={styles.wrapper} onLayout={onMainViewLayout}>
            <KeyboardAvoidingView enabled>
              <Container
                row={false}
                style={[
                  typeof state.messagesContainerHeight === 'number' && {
                    height: state.messagesContainerHeight,
                  },
                ]}
              >
                <MessageList clickableText="Read full information about Pension" />
              </Container>
            </KeyboardAvoidingView>
            <Container row={false} style={styles.inputArea}>
              {_inputToolbar}
            </Container>
          </Container>
        </Container>
        <ChatHistoryModal ref={modalRef} />
      </NavContainer>
    )
  }
  return (
    <Container
      row={false}
      testID={TEST_ID.LOADING_WRAPPER}
      style={styles.container}
      onLayout={onInitialLayoutViewLayout}
    >
      {_loadingElement}
    </Container>
  )
}

export default ChatList
