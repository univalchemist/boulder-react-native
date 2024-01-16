import { ViewProps } from 'react-native'

export interface ISearchInputProps extends ViewProps {
  initialValue?: string
  placeholder?: string
  debounce?: number
  onSearch: (_text: string) => void
}
