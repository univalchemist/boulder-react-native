import React, { useRef, useImperativeHandle, forwardRef, useCallback, useState } from 'react'

import { t } from '@/i18n'
import { chatGroupByTime } from '@/utils'

import { Container, Modalize, ModalHandle, ScrollContainer, SearchInput } from '@/components'
import HistoryItem from '../HistoryItem'

import { ChatHistoryModalProps, ChatHistoryModalRef, IChatHistory } from './types'
import { _history } from './data'
import styles from './styles'

export const ChatHistoryModal = forwardRef<ChatHistoryModalRef, ChatHistoryModalProps>((_, ref) => {
  const [history] = useState<object>(chatGroupByTime(_history))
  const modalRef = useRef<ModalHandle>(null)

  useImperativeHandle(ref, () => ({
    open() {
      open()
    },
    close() {
      close()
    },
  }))

  const close = useCallback(() => modalRef.current?.close(), [])
  const open = useCallback(() => modalRef.current?.open(), [])

  const onSearch = useCallback(() => null, [])

  const __renderItem = useCallback(
    (item: string) => {
      const dataToRender: IChatHistory[] = history[item as keyof typeof history]
      return <HistoryItem key={item} title={item} messages={dataToRender} />
    },
    [history],
  )

  return (
    <Modalize ref={modalRef} title={t('chat.history.modal.title')}>
      <Container row={false} style={styles.container}>
        <SearchInput
          onSearch={onSearch}
          placeholder={t('chat.history.modal.search.placeholder')}
          style={styles.searchInput}
        />
        <ScrollContainer showsVerticalScrollIndicator={false}>
          {Object.keys(history).map(__renderItem)}
        </ScrollContainer>
      </Container>
    </Modalize>
  )
})

export type ChatHistoryModalHandle = React.ElementRef<typeof ChatHistoryModal>
export default ChatHistoryModal
