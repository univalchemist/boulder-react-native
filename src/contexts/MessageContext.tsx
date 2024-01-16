import React, { useState, useCallback, createContext, useMemo } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { v4 as uuidv4 } from 'uuid'
import { _comments, _messages as dummyMessages, _news, _user1 } from '@/data'
import { IComment, IMessage, User } from '@/types'

export interface CoordinateObject {
  _id: number | string
  coordinate: IMeasure
}

export interface IMeasure {
  x: number
  y: number
  width: number
  height: number
  pageX: number
  pageY: number
}

export interface MessageOptions {
  inverted?: boolean
  loadEarlier?: boolean
  alignTop?: boolean
  scrollToBottom?: boolean
  extraData?: any
  scrollToBottomOffset?: number
  fullWidth?: boolean // if single conversation, set true
  infiniteScroll?: boolean
  isLoadingEarlier?: boolean
  showAvatarForEveryMessage?: boolean
  isComment?: boolean
  renderUsernameOnMessage?: boolean
  bubbleStyle?: StyleProp<ViewStyle>
}

const initialMessageOptions: MessageOptions = {
  inverted: false,
  loadEarlier: false,
  alignTop: false,
  scrollToBottom: false,
  extraData: undefined,
  scrollToBottomOffset: 0,
  fullWidth: false,
  infiniteScroll: false,
  isLoadingEarlier: false,
  showAvatarForEveryMessage: false,
  isComment: false,
  renderUsernameOnMessage: false,
  bubbleStyle: null,
}

export interface MessageState<TMessage extends IComment = IComment & IMessage> {
  typingDisabled: boolean
  text?: string
  messages?: TMessage[]
  /* Typing Indicator state */
  isTyping?: boolean
  messageType: MessageType
  messageOptions: MessageOptions
}

const initialState: MessageState = {
  typingDisabled: false,
  text: undefined,
  messages: [],
  isTyping: false,
  messageType: 'message',
  messageOptions: initialMessageOptions,
}

interface IMessageListContext {
  coordinates: CoordinateObject[]
  onItemLayout: (id: string | number, event: IMeasure) => void
  state: MessageState
  onClickReply: (message: IComment) => void
  appendMessage: (message: string, user: User) => void
  appendComment: (message: IComment, messages?: IComment[]) => void
  fetchData: (type: MessageType) => void
  setMessageOptions: (opts: MessageOptions) => void
}

export type MessageType = 'message' | 'news' | 'comment'

export const MessageContext = createContext<IMessageListContext>({
  coordinates: [],
  onItemLayout: () => undefined,
  state: initialState,
  onClickReply: () => undefined,
  appendMessage: () => undefined,
  appendComment: () => undefined,
  fetchData: () => undefined,
  setMessageOptions: () => undefined,
})

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [coordinates, setCoordinates] = useState<CoordinateObject[]>([])
  const [state, setState] = useState<MessageState>(initialState)

  const appendMessage = useCallback((message: string, user: User) => {
    setState((prev) => {
      const newMessages: IMessage[] = Array.from(prev.messages ? prev.messages : [])
      newMessages.unshift({
        _id: uuidv4(),
        text: message,
        user,
        createdAt: new Date(),
      })
      return {
        ...prev,
        messages: newMessages,
        isTyping: user === _user1,
      }
    })
  }, [])

  // Comment functions
  const onItemLayout = useCallback((_id: number | string, event: IMeasure) => {
    setCoordinates((_coordinates) => {
      const newCoordinates = _coordinates.filter((item) => item._id !== _id)
      newCoordinates.push({ _id, coordinate: event })
      return newCoordinates
    })
  }, [])

  const appendComment = useCallback((message: IComment, messages?: IComment[]) => {
    if (!messages) return []
    const _messages = messages.map((m) => {
      if (m._id === message._id) {
        const replyTemporary: IComment = {
          _id: uuidv4(),
          isReplying: true,
          createdAt: new Date(),
        }
        if (!m.replies) m.replies = []
        const _index = m.replies?.findIndex((r) => r.isReplying)
        if (_index > -1) return m
        m.replies?.push(replyTemporary)
      } else {
        m.replies = appendComment(message, m.replies)
      }
      return m
    })
    return _messages
  }, [])

  const onClickReply = useCallback(
    (message: IComment) => {
      const _messages = appendComment(message, state.messages)
      setState((prev) => ({
        ...prev,
        messages: _messages,
      }))
    },
    [appendComment, state.messages],
  )

  const fetchData = useCallback((messageType: MessageType) => {
    if (messageType === 'comment') {
      setState((prev) => ({ ...prev, messageType, messages: _comments }))
    }
    if (messageType === 'message') {
      setState((prev) => ({ ...prev, messageType, messages: dummyMessages }))
    }
    if (messageType === 'news') {
      setState((prev) => ({ ...prev, messageType, messages: _news }))
    }
  }, [])

  const setMessageOptions = useCallback((messageOptions: MessageOptions) => {
    setState((prev) => ({
      ...prev,
      messageOptions,
    }))
  }, [])

  const value = useMemo(
    () => ({
      coordinates,
      onItemLayout,
      state,
      onClickReply,
      fetchData,
      appendMessage,
      appendComment,
      setMessageOptions,
    }),
    [
      coordinates,
      onItemLayout,
      state,
      onClickReply,
      fetchData,
      appendMessage,
      appendComment,
      setMessageOptions,
    ],
  )

  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
}
