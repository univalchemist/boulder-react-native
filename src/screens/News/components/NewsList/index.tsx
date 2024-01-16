import React, { useCallback, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MessageList } from '@/components'
import { useMessage } from '@/hooks'
import { IMessage, NavigationProp } from '@/types'

export const NewsList = () => {
  const navigation = useNavigation<NavigationProp>()
  const { fetchData, setMessageOptions } = useMessage()

  const clickableAction = useCallback(
    (item: IMessage) => {
      navigation.navigate('NewsDetail', { title: item.title, id: item._id })
    },
    [navigation],
  )

  useEffect(() => fetchData('news'), [fetchData])
  useEffect(
    () => setMessageOptions({ fullWidth: true, showAvatarForEveryMessage: true, inverted: true }),
    [setMessageOptions],
  )

  return <MessageList clickableText="Read full news update" clickableAction={clickableAction} />
}

export default NewsList
