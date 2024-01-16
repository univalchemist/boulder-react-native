declare module '*.webp'

declare module '*.png'

declare module '*.gif'

declare module '*.jpg'

declare module '*.jpeg'

declare module '*.svg' {
  import React from 'react'

  import { SvgProps } from 'react-native-svg'

  const content: React.FC<SvgProps>

  export default content
}

declare module 'react-native-typing-animation' {
  export { TypingAnimation } from 'react-native-typing-animation'
}
