import { TextProps } from 'react-native'

import { Maybe } from '@/types'

export interface IDateTimeProps extends TextProps {
  value: Maybe<string | number | Date>
  mode?: 'diff' | 'humanize' | null
  format?: string
}
