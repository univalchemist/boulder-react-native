import React, { useCallback } from 'react'

import { Colors } from '@/constants'
import { Button, Input, Container, Icon } from '@/components'
import { useHookForm } from '@/hooks'
import Attach from '@/assets/icons/attach.svg'

import styles from './styles'
import Avatar from '../Avatar'
import { _user1 } from '@/data'
import { ViewStyle } from 'react-native'

type TCommentInput = {
  onSubmit: (data: string) => void
  placeholder?: string
  clearInput?: boolean
  style?: ViewStyle
}

export const CommentInput: React.FC<TCommentInput> = ({
  placeholder = '',
  onSubmit,
  clearInput,
  style,
}) => {
  const {
    Controller,
    handler: {
      handleSubmit,
      control,
      formState: { errors },
      reset,
      clearErrors,
      setError,
      watch,
    },
  } = useHookForm({
    defaultValues: {
      message: '',
    },
  })

  const onHandleSubmit = useCallback(
    (data: { message: string }) => {
      if (!data.message) {
        setError('message', { type: 'custom', message: 'message is empty' })
        return
      }
      onSubmit(data.message)
      reset({ message: '' })
      if (clearInput) {
        clearErrors()
      }
    },
    [clearErrors, clearInput, onSubmit, reset, setError],
  )
  const watchMessage = watch('message', '')
  return (
    <Container style={[styles.container, style]}>
      <Container gap={12} alignItems="center" justifyContent="center" style={styles.content}>
        <Avatar avatarStyle={styles.image} user={_user1} />
        <Container
          alignItems="center"
          style={[styles.inputContainer, !!errors.message && styles.errorMessage]}
        >
          <Container gap={6} style={styles.inputWrapper}>
            <Controller
              control={control}
              rules={{ required: false }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  style={styles.input}
                  cursorColor={Colors.BLACK}
                  placeholderTextColor={Colors.Grey.Default}
                  multiline
                  placeholder={placeholder}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="message"
            />
          </Container>
          <Button style={styles.soundBtn}>
            <Attach />
          </Button>
          {watchMessage && !errors.message && (
            <Button style={styles.sendBtn} onPress={handleSubmit(onHandleSubmit)}>
              <Icon name="send-2" />
            </Button>
          )}
        </Container>
      </Container>
    </Container>
  )
}

export default CommentInput
