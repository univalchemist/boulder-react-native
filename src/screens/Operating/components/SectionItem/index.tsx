import React, { useCallback } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Container, Icon, TextView } from '@/components'
import { t } from '@/i18n'
import { Colors } from '@/constants'
import { IOperating } from '@/types'

import styles from './styles'

interface Props {
  active?: boolean
  data: IOperating
}

export const SectionItem = (props: Props) => {
  const { active, data } = props
  const navigation = useNavigation<any>()

  const onPress = useCallback(() => {
    navigation.navigate('OperatingDetail')
  }, [navigation])

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container style={styles.container}>
        {!active && <Container style={styles.redLine} />}
        <Container style={styles.iconWrapper}>
          <Icon name={active ? 'success' : 'warning'} />
        </Container>
        <Container row={false} style={styles.content}>
          <TextView style={[styles.itemTitle, active && { color: Colors.Green.Light }]}>
            {active ? t('operating.item.planned') : t('operating.item.active')}
          </TextView>
          <TextView style={styles.title}>{data.title}</TextView>
          <TextView style={styles.description}>{data.description}</TextView>
          <TextView style={styles.dateTime}>{data.date.toLocaleDateString()}</TextView>
          <TextView style={styles.dateTime}>{data.time}</TextView>
        </Container>
      </Container>
    </TouchableWithoutFeedback>
  )
}

export default SectionItem
