import React from 'react'
import { SectionList } from 'react-native'

import { Container } from '@/components'
import { NavContainer } from '@/navigation'
import { t } from '@/i18n'
import { _operatingInformation } from '@/data'
import { SectionHeader, SectionItem } from './components'

import { OperatingProps } from './types'
import styles from './styles'
import ItemSeparator from './components/ItemSeparator'

const Operating: React.FC<OperatingProps> = () => {
  return (
    <NavContainer hasBack title={t('operating.screen.title')}>
      <Container row={false} style={[styles.wrapper]}>
        <SectionList
          sections={_operatingInformation}
          keyExtractor={(item) => item.id}
          renderItem={({ item, section }) => (
            <SectionItem active={section.title === 'PLANNED'} data={item} />
          )}
          renderSectionHeader={({ section: { title, data } }) => (
            <SectionHeader title={title} count={data.length || t('operating.none')} />
          )}
          ItemSeparatorComponent={ItemSeparator}
        />
      </Container>
    </NavContainer>
  )
}

export default Operating
