import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { IMenu } from '@/types'

export type IDrawerProps = DrawerContentComponentProps

export interface IMenuItemProps {
  item: IMenu
  expanded: string[]
  matched?: string[]
  onSelect: (_id: string) => void
}
