import moment from 'moment'
import { t } from '@/i18n'
import { Maybe } from '@/types'

export const formatDateTime = (dateTime: Date | string | number | null, format: string): string =>
  dateTime ? moment(dateTime).format(format) : moment().format(format)

export const minutesToHRTimeStr = (minutes: number): string => {
  const sign = minutes < 0 ? '-' : ''

  const _minutes = Math.abs(minutes)
  const daysDiff = Math.floor(_minutes / 1440)
  const hoursDiff = Math.floor((_minutes % 1440) / 60)
  const minsDiff = _minutes % 60

  let timeStr = sign
  if (daysDiff) {
    timeStr = `${daysDiff}d `
  }
  if (hoursDiff) {
    timeStr += `${hoursDiff}h `
  }
  if (minsDiff) {
    timeStr += `${minsDiff < 10 ? '0' : ''}${minsDiff}m`
  } else {
    timeStr += `0m`
  }

  return timeStr
}

export const getEventHeaderDay = (date: string): [string, string] => {
  let _curDay = ''
  const _dateObj = moment(date)
  let _day = _dateObj.format('dddd, MMMM D')
  const diffDays = moment().startOf('day').diff(_dateObj.startOf('day'), 'days')
  const diffWeek = moment().startOf('week').diff(_dateObj.startOf('week'), 'weeks')

  if (moment().isSame(date, 'day')) {
    _curDay = t('today')
    _day = ''
  } else if (diffDays === 1) {
    _curDay = t('yesterday')
  } else if (diffDays === -1) {
    _curDay = t('tomorrow')
  } else if (diffWeek === -1) {
    _curDay = t('nextWeek')
  }

  return [_curDay, _day]
}

export const getEventDetailDateTime = (date: string): [string, string] => {
  const formatted = formatDateTime(date, 'dddd, MMMM D@h:mm A')
  const [_date, _time] = formatted.split('@')

  return [_date, _time]
}

export const getTimeDiff = (
  start: Date | string | number,
  end: Date | string | number,
  unit: 'minutes' | 'seconds' | 'hours',
): number => moment(start).diff(end, unit)

export const humanize = (datetime: Maybe<Date | string | number>): string => {
  if (!datetime) return ''
  const diff = moment(datetime).diff(moment(), 'minutes')

  if (diff >= 0 && diff <= 1) {
    return t('justNow')
  }
  return moment.duration(diff, 'minutes').humanize(true)
}

export const minutesToTimeStr = (minutes: number): string => {
  if (!minutes) return '0m'

  const sign = minutes < 0 ? '-' : ''

  const _minutes = Math.abs(minutes)
  const daysDiff = Math.floor(_minutes / 1440)
  const hoursDiff = Math.floor((_minutes % 1440) / 60)
  const minsDiff = _minutes % 60

  let timeStr = sign
  if (daysDiff) {
    timeStr += `${daysDiff}d `
  }
  if (hoursDiff) {
    timeStr += `${hoursDiff}h `
  }
  if (minsDiff) {
    timeStr += `${minsDiff}m`
  }

  return timeStr
}
