import React from 'react'
import { Image } from 'react-native'

import { IImageViewProps } from './types'

export const ImageView: React.FC<IImageViewProps> = ({ style, ...rest }) => {
  return <Image style={[style]} {...rest} />
}

export default ImageView
