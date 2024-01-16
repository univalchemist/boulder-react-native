import { INotification, IOption, IPosition, TNotificationCategory } from '@/types'

export interface INotificationViewProps {
  category: IOption<TNotificationCategory>
  data: INotification[]
  position: { top: number; left: number }
}

export interface INotificationViewRef {
  show: (
    _category: IOption<TNotificationCategory>,
    _data: INotification[],
    _pos: IPosition | null,
  ) => void
  hide: () => void
}
