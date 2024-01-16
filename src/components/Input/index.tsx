import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import styles from './styles'

export const Input: React.FC<TextInputProps> = ({ style, ...rest }) => {
  return <TextInput style={[styles.input, style]} {...rest} />
}

export default Input
