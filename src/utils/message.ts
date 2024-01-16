import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import { Maybe, IMessage } from '@/types'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import _ from 'lodash'

import { IChatHistory } from '@/screens/Chat/components/HistoryModal/types'

const thresholds = [
  { l: 's', r: 1 },
  { l: 'm', r: 1 },
  { l: 'mm', r: 59, d: 'minute' },
  { l: 'h', r: 1 },
  { l: 'hh', r: 23, d: 'hour' },
  { l: 'd', r: 1 },
  { l: 'dd', r: 29, d: 'day' },
  { l: 'M', r: 1 },
  { l: 'MM', r: 11, d: 'month' },
  { l: 'y', r: 1 },
  { l: 'yy', d: 'year' },
]

const aWeekRange = [
  '7 days ago',
  '8 days ago',
  '9 days ago',
  '10 days ago',
  '11 days ago',
  '12 days ago',
  '13 days ago',
]
const twoWeeksRange = [
  '14 days ago',
  '15 days ago',
  '16 days ago',
  '17 days ago',
  '18 days ago',
  '19 days ago',
  '20 days ago',
]

dayjs.extend(relativeTime, {
  thresholds,
})
dayjs.extend(updateLocale)

export function isSameUser(currentMessage: Maybe<IMessage>, diffMessage: Maybe<IMessage>) {
  return !!(
    diffMessage &&
    diffMessage.user &&
    currentMessage?.user &&
    diffMessage.user._id === currentMessage?.user._id
  )
}

export function isSameDay(currentMessage: IMessage, diffMessage: Maybe<IMessage>) {
  if (!diffMessage || !diffMessage.createdAt) {
    return false
  }

  const currentCreatedAt = dayjs(currentMessage.createdAt)
  const diffCreatedAt = dayjs(diffMessage.createdAt)

  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false
  }

  return currentCreatedAt.isSame(diffCreatedAt, 'day')
}

export function calculateAgoTime(time?: Date | number) {
  // For getting ago time: a minute ago, 2 hours ago
  dayjs.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a minute',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years',
    },
  }) // Set your preferred locale if necessary
  if (!time) return ''
  return dayjs(time).fromNow()
}

export function chatGroupByTime(data: IChatHistory[]) {
  // For group by time: Today, Yesterday...
  dayjs.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s',
      s: 'Today',
      m: 'Today',
      mm: 'Today',
      h: 'Today',
      hh: 'Today',
      d: 'Yesterday',
      dd: '%d days ago',
      M: 'a month ago',
      MM: '%d months ago',
      y: 'a year ago',
      yy: '%d years ago',
    },
  })
  let _data: any = data.map((d: IChatHistory) => {
    let date = dayjs(d.date).fromNow()
    if (aWeekRange.includes(date)) date = 'a week ago'
    if (twoWeeksRange.includes(date)) date = '2 weeks ago'
    return {
      ...d,
      date,
    }
  })
  _data = _.groupBy(_data, 'date')
  return _data
}

export const StylePropType = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.object,
  PropTypes.number,
  PropTypes.bool,
])
