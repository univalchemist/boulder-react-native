export type TEventRole = 'organizer' | 'attendee'

export interface IUser {
  id: string
  avatar?: string
  firstName: string
  lastName: string
  email: string
}

export interface IEventAttendee extends IUser {
  role: TEventRole
  attending?: boolean
}

export interface IEvent {
  id: string
  time: string
  duration: number
  name: string
  description?: string
  type?: string
  seats: number
  attendees: IEventAttendee[]
}
