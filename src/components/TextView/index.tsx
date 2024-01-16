import React, { useState } from 'react'
import { Text } from 'react-native'

import { t } from '@/i18n'
import { ellipsis } from '@/utils'
import { ITextViewProps } from './types'
import styles from './styles'

export const TextView: React.FC<ITextViewProps> = ({ style, maxLength, children, ...rest }) => {
  const [showFull, setShowFull] = useState<boolean>(false)

  const renderChildren = () => {
    if (typeof children === 'string' && maxLength) {
      const [str, ellipsised] = ellipsis(children, maxLength)
      return (
        <>
          {showFull ? children : str}
          {ellipsised && (
            <Text
              suppressHighlighting
              style={styles.readMore}
              onPress={() => setShowFull(!showFull)}
            >
              {` ${showFull ? t('readLess') : t('readMore')} `}
            </Text>
          )}
        </>
      )
    }

    return children
  }

  return (
    <Text style={[styles.text, style]} {...rest}>
      {renderChildren()}
    </Text>
  )
}

export default TextView
