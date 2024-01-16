import React, { useMemo } from 'react'
import { TextStyle } from 'react-native'
import ParsedText from 'react-native-parsed-text'

import { Container, ImageView } from '@/components'

import { IMessage } from '@/types'

import { MessageTextProps } from './types'
import styles from './styles'
import { useMessage } from '@/hooks'

export const MessageText = <TMessage extends IMessage = IMessage>({
  currentMessage = {} as TMessage,
  position = 'left',
  containerStyle,
  textStyle,
  linkStyle: linkStyleProp,
  customTextStyle,
  parsePatterns = () => [],
  textProps,
}: MessageTextProps<TMessage>) => {
  const {
    state: { messageType },
  } = useMessage()
  const isComment = useMemo(() => messageType === 'comment', [messageType])
  const linkStyle = useMemo(
    () => [styles[position].link, linkStyleProp && linkStyleProp[position]],
    [linkStyleProp, position],
  )
  return (
    <Container
      row={false}
      style={[styles[position].container, containerStyle && containerStyle[position]]}
    >
      {!isComment && !!currentMessage.image && (
        <ImageView source={{ uri: currentMessage.image }} style={styles[position].image} />
      )}
      <ParsedText
        style={[styles[position].text, textStyle && textStyle[position], customTextStyle]}
        parse={[
          ...parsePatterns!(linkStyle as TextStyle),
          { type: 'url', style: linkStyle },
          { type: 'phone', style: linkStyle },
          { type: 'email', style: linkStyle },
        ]}
        childrenProps={{ ...textProps }}
      >
        {currentMessage!.text}
      </ParsedText>
      {isComment && !!currentMessage.image && (
        <ImageView source={{ uri: currentMessage.image }} style={styles[position].image} />
      )}
    </Container>
  )
}

export default MessageText
