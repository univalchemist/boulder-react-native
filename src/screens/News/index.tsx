import React, { useCallback, useMemo, useRef, useState } from 'react'
import { LayoutChangeEvent, Platform } from 'react-native'

import { Container } from '@/components'
import { NavContainer } from '@/navigation'
import { MIN_COMPOSER_HEIGHT, MIN_INPUT_TOOLBAR_HEIGHT, TEST_ID } from '@/constants'
import { t } from '@/i18n'

import { _news } from '@/data'
import { MessageProvider } from '@/contexts'
import { NewsList } from './components'

import { NewsProps, NewsState } from './types'
import styles from './styles'

const News: React.FC<NewsProps> = () => {
  const keyboardHeightRef = useRef(0)
  const bottomOffsetRef = useRef(0)
  const maxHeightRef = useRef<number | undefined>(undefined)
  const isFirstLayoutRef = useRef(true)

  const [state, setState] = useState<NewsState>({
    isInitialized: false, // initialization will calculate maxHeight before rendering the chat
    composerHeight: MIN_COMPOSER_HEIGHT,
    messagesContainerHeight: undefined,
    typingDisabled: false,
    text: undefined,
    messages: _news,
    isTyping: false,
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

  const _loadingElement = useMemo(() => null, [])

  if (state.isInitialized) {
    return (
      <NavContainer hasBack title={t('news.screen.title')}>
        <Container row={false} style={styles.container}>
          <Container row={false} style={styles.wrapper} onLayout={onMainViewLayout}>
            <Container
              row={false}
              style={[
                typeof state.messagesContainerHeight === 'number' && {
                  height: state.messagesContainerHeight,
                },
              ]}
            >
              <MessageProvider>
                <NewsList />
              </MessageProvider>
            </Container>
          </Container>
        </Container>
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

export default News
