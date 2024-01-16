import React from 'react'
import { SvgProps } from 'react-native-svg'

import Book from '@/assets/icons/book.svg'
import Briefcase from '@/assets/icons/briefcase.svg'
import Building from '@/assets/icons/building.svg'
import Calendar from '@/assets/icons/calendar.svg'
import Notification from '@/assets/icons/notification.svg'
import CloseCircle from '@/assets/icons/close-circle.svg'
import Close from '@/assets/icons/close.svg'
import Home from '@/assets/icons/home.svg'
import Programming from '@/assets/icons/programming.svg'
import Search from '@/assets/icons/search.svg'
import Send2 from '@/assets/icons/send-2.svg'
import Sound from '@/assets/icons/sound.svg'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import ArrowUp from '@/assets/icons/arrow-up.svg'
import ArrowLeft from '@/assets/icons/arrow-left.svg'
import Menu from '@/assets/icons/menu.svg'
import Warning2 from '@/assets/icons/warning-2.svg'
import Gauge from '@/assets/icons/gauge.svg'
import UserAvailable from '@/assets/icons/user-available.svg'
import ChatHistory from '@/assets/icons/chat-history.svg'
import Logo from '@/assets/images/logo.svg'
import CalendarMenu from '@/assets/icons/calendar_menu.svg'
import KpiMenu from '@/assets/icons/kpi_menu.svg'
import NewsMenu from '@/assets/icons/news_menu.svg'
import OperationsMenu from '@/assets/icons/operations_menu.svg'
import NotificationO from '@/assets/icons/notification-o.svg'
import Add from '@/assets/icons/add.svg'
import CalendarO from '@/assets/icons/calendar-o.svg'
import Clock from '@/assets/icons/clock.svg'
import Edit2 from '@/assets/icons/edit-2.svg'
import Headphone from '@/assets/icons/headphone.svg'
import Trash from '@/assets/icons/trash.svg'
import User from '@/assets/icons/user.svg'
import CheckFilled from '@/assets/icons/check-filled.svg'
import InactiveFilled from '@/assets/icons/inactive-filled.svg'
import BlueDot from '@/assets/icons/blue-dot.svg'
import StatusCheck from '@/assets/icons/status-check.svg'
import StatusClose from '@/assets/icons/status-close.svg'
import StatusInActive from '@/assets/icons/status-inactive.svg'
import Note2 from '@/assets/icons/note-2.svg'
import Warning from '@/assets/icons/warning.svg'
import Success from '@/assets/icons/success.svg'

const icons: Record<string, React.FC<SvgProps>> = {
  book: Book,
  briefcase: Briefcase,
  building: Building,
  calendar: Calendar,
  notification: Notification,
  'close-circle': CloseCircle,
  close: Close,
  home: Home,
  programming: Programming,
  search: Search,
  'send-2': Send2,
  sound: Sound,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  'arrow-left': ArrowLeft,
  menu: Menu,
  warning2: Warning2,
  gauge: Gauge,
  'user-badge-available': UserAvailable,
  'chat-history': ChatHistory,
  logo: Logo,
  'calendar-menu': CalendarMenu,
  'kpi-menu': KpiMenu,
  'news-menu': NewsMenu,
  'operations-menu': OperationsMenu,
  'notification-o': NotificationO,
  add: Add,
  'calendar-o': CalendarO,
  clock: Clock,
  'edit-2': Edit2,
  headphone: Headphone,
  trash: Trash,
  user: User,
  'check-filled': CheckFilled,
  'status-close': StatusClose,
  'inactive-filled': InactiveFilled,
  'blue-dot': BlueDot,
  'status-check': StatusCheck,
  'status-inactive': StatusInActive,
  'note-2': Note2,
  warning: Warning,
  success: Success,
}

export type TIcon = keyof typeof icons

export default icons
