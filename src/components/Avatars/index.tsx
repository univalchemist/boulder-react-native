import React from 'react'
import { TouchableOpacity } from 'react-native'

import { t } from '@/i18n'
import { RW, fullName, getRandomColor, getUserInitial } from '@/utils'
import Container from '../Container'
import ImageView from '../ImageView'
import TextView from '../TextView'
import Icon from '../Icon'
import { IAvatarsProps } from './types'
import styles from './styles'

export const Avatars: React.FC<IAvatarsProps> = ({
  data,
  max = 4,
  size = RW(28),
  onUserClick,
  ...rest
}) => {
  return (
    <Container gap={8} alignItems="center" {...rest}>
      {data.slice(0, max).map((datum) => (
        <TouchableOpacity
          key={datum.id}
          activeOpacity={onUserClick ? 0.75 : 1}
          style={[
            styles.avatarItem,
            {
              backgroundColor: getRandomColor(fullName(datum.firstName, datum.lastName)),
              width: size,
              height: size,
            },
          ]}
          onPress={() => onUserClick?.(datum.id)}
        >
          {datum.avatar && (
            <ImageView
              source={{ uri: datum.avatar }}
              style={[styles.avatar, { width: size, height: size }]}
            />
          )}
          <TextView style={styles.userName}>{getUserInitial(datum.firstName)}</TextView>
          {datum.attending !== undefined && (
            <Icon
              name={datum.attending ? 'check-filled' : 'inactive-filled'}
              style={styles.avatarIcon}
            />
          )}
        </TouchableOpacity>
      ))}
      {data.length > max && (
        <TextView style={styles.hasMore}>{t('hasMore', { value: data.length - max })}</TextView>
      )}
    </Container>
  )
}

export default Avatars
