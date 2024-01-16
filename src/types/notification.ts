export type TNotificationCategory = 'kpis' | 'news' | 'calendar' | 'operations'

export interface INotification {
  id: string
  title: string
  content: string
  read: boolean
  category: TNotificationCategory
  time: string
}
