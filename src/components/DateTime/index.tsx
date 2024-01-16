import React, { useMemo } from 'react'

import { formatDateTime, getTimeDiff, humanize, minutesToTimeStr } from '@/utils'
import TextView from '../TextView'
import { IDateTimeProps } from './types'

export const DateTime: React.FC<IDateTimeProps> = ({
  value,
  mode,
  format = 'YYYY-MM-DD',
  ...rest
}) => {
  const _value = useMemo(() => {
    if (!value) return ''
    let _vale = value
    if (!isNaN(+_vale)) {
      if (_vale.toString().length < 13) {
        _vale = +value * 1000
      }
    }
    if (mode === 'diff') {
      const diff = getTimeDiff(_vale, new Date(), 'minutes')
      return minutesToTimeStr(diff)
    } else if (mode === 'humanize') {
      return humanize(_vale)
    }
    return formatDateTime(value, format)
  }, [format, mode, value])

  if (!format) return null
  if (!value) return null

  return <TextView {...rest}>{_value}</TextView>
}
