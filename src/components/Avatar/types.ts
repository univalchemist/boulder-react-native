import { TextStyle, StyleProp, ImageStyle } from 'react-native'
import { User } from '@/types'

export interface AvatarProps {
  user?: User
  avatarStyle?: StyleProp<ImageStyle>
  textStyle?: StyleProp<TextStyle>
  onPress?(props: any): void
  onLongPress?(props: any): void
}
