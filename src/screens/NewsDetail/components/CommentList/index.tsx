import React, { useEffect } from 'react'
import { MessageList } from '@/components'
import styles from './styles'
import { useMessage } from '@/hooks'

export const CommentList = () => {
  const { fetchData, setMessageOptions } = useMessage()

  useEffect(() => fetchData('comment'), [fetchData])
  useEffect(
    () =>
      setMessageOptions({
        fullWidth: true,
        isComment: true,
        showAvatarForEveryMessage: true,
        renderUsernameOnMessage: true,
        bubbleStyle: styles.bubbleStyle,
      }),
    [setMessageOptions],
  )

  return <MessageList />
}

export default CommentList
