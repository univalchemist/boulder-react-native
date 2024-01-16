import React from 'react'

import { Container, Icon, TextView } from '@/components'
import { NavContainer } from '@/navigation'
import { t } from '@/i18n'
import { Colors } from '@/constants'

import { OperatingDetailProps } from './types'
import styles from './styles'

const OperatingDetail: React.FC<OperatingDetailProps> = ({ active }) => {
  return (
    <NavContainer hasBack title={t('operating.screen.title')}>
      <Container row={false} style={styles.container}>
        <Container style={styles.wrapper}>
          <Container style={styles.iconWrapper}>
            <Icon name={active ? 'success' : 'warning'} />
          </Container>
          <Container row={false}>
            <TextView style={[styles.itemTitle, active && { color: Colors.Green.Light }]}>
              {active ? t('operating.item.planned') : t('operating.item.active')}
            </TextView>
            <TextView style={styles.dateTime}>{'Thursday, July 6'}</TextView>
            <TextView style={styles.dateTime}>{'11:00am - 5:00pm'}</TextView>
            <TextView style={styles.created}>{'Created by:'}</TextView>
            <TextView style={styles.name}>{'Erik Grensman'}</TextView>
          </Container>
        </Container>
        <Container row={false} style={styles.content}>
          <TextView style={styles.title}>{'Design & Engineering Team Sync'}</TextView>
          <TextView style={styles.description}>
            {
              // eslint-disable-next-line max-len
              "Welcome to the operating information section. Here, you will find essential details and guidelines for effectively utilizing our system. This comprehensive resource covers everything from system requirements and setup instructions to troubleshooting tips and advanced features. Whether you're a novice or an experienced user, this information will empower you to maximize your productivity and make the most out of our cutting-edge technology. Explore and discover the possibilities today!"
            }
          </TextView>
        </Container>
      </Container>
    </NavContainer>
  )
}

export default OperatingDetail
