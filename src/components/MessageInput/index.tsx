import React, { useCallback } from 'react'

import { Colors } from '@/constants'
import { Button, Input, Container, Icon } from '@/components'
import { useHookForm } from '@/hooks'

import styles from './styles'

type TMessageInput = {
  onSubmit: (data: string) => void
  placeholder?: string
  clearInput?: boolean
}

export const MessageInput: React.FC<TMessageInput> = ({
  placeholder = '',
  onSubmit,
  clearInput,
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
  return (
    <Container>
      <Container gap={12} alignItems="center" justifyContent="center" style={styles.content}>
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
            <Icon name="sound" />
          </Button>
        </Container>
        <Button style={styles.sendBtn} onPress={handleSubmit(onHandleSubmit)}>
          <Icon name="send-2" />
        </Button>
      </Container>
    </Container>
  )
}

export default MessageInput
