import { IUser } from '@/types'
import { ViewProps } from 'react-native'

export interface IAvatarsProps extends ViewProps {
  data: (IUser & { [x: string]: any })[]
  max?: number
  size?: number
  onUserClick?: (_id: string) => void
}
