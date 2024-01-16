import React from 'react'

import Icons from './icons'

import { IIconProps } from './types'

export const Icon: React.FC<IIconProps> = ({ name, style, ...rest }) => {
  if (!name) return null

  const IconComp = Icons[name]

  if (!IconComp) return null
  return <IconComp style={style} {...rest} />
}

export default Icon
