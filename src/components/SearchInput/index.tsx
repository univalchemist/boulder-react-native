import React, { useState } from 'react'

import { useSearch } from '@/hooks'
import Container from '../Container'
import Input from '../Input'
import Icon from '../Icon'
import { ISearchInputProps } from './types'
import styles from './styles'

export const SearchInput: React.FC<ISearchInputProps> = ({
  style,
  placeholder,
  debounce = 300,
  onSearch,
  ...rest
}) => {
  const { text, onChangeText } = useSearch(debounce, onSearch)
  const [focused, setFocused] = useState<boolean>(false)

  return (
    <Container
      alignItems="center"
      gap={8}
      style={[styles.container, focused && styles.focused, style]}
      {...rest}
    >
      <Icon name="search" />
      <Input
        value={text}
        placeholder={placeholder ?? ''}
        onChangeText={onChangeText}
        style={styles.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        returnKeyType="search"
      />
    </Container>
  )
}

export default SearchInput
