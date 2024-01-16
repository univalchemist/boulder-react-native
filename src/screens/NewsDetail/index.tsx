import React, { useMemo } from 'react'

import { CommentInput, Container, ScrollContainer, TextView } from '@/components'
import { NavContainer } from '@/navigation'
import Divider from '@/components/Divider'

import { t } from '@/i18n'
import { _newsDetail } from '@/data'
import { MessageProvider } from '@/contexts'

import { NewsDetailProps } from './types'
import styles from './styles'
import { CommentList } from './components'

const NewsDetail: React.FC<NewsDetailProps> = (props) => {
  const { route } = props

  const _inputToolbar = useMemo(
    () => (
      <CommentInput
        placeholder={t('comments.input.placeholder')}
        clearInput
        onSubmit={() => console.log('submitted')}
      />
    ),
    [],
  )

  return (
    <NavContainer hasBack title={route.params.title}>
      <ScrollContainer
        style={styles.container}
        automaticallyAdjustKeyboardInsets
        showsVerticalScrollIndicator={false}
      >
        <Container row={false} style={[styles.wrapper]}>
          <Container row={false} style={styles.content}>
            <TextView style={styles.title}>{_newsDetail.title}</TextView>
            <TextView style={styles.text}>{_newsDetail.text}</TextView>
          </Container>
          <Divider />
          <MessageProvider>
            <Container row={false} style={styles.commentsContainer}>
              <TextView style={styles.commentTitle}>{t('comments.title')}</TextView>
              <Container row={false} style={styles.comments}>
                <CommentList />
              </Container>
              <Container row={false} style={styles.inputArea}>
                {_inputToolbar}
              </Container>
            </Container>
          </MessageProvider>
        </Container>
      </ScrollContainer>
    </NavContainer>
  )
}

export default NewsDetail
