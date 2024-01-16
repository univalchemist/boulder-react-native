import React, { useCallback, useState } from 'react'

import { Button, Container, Icon, TextView, ScrollContainer, SearchInput } from '@/components'
import { IMenu } from '@/types'
import { t } from '@/i18n'

import MenuItem from './menuItem'
import { IDrawerProps } from './types'
import styles from './styles'

const items: IMenu[] = [
  {
    id: 'home',
    label: t('home'),
    icon: 'home',
  },
  {
    id: 'spintr',
    label: t('drawer.menu.spintrPlaybooks'),
    icon: 'book',
  },
  {
    id: 'employment',
    label: t('drawer.menu.myEmployment'),
    icon: 'briefcase',
    items: [
      {
        id: 'safety-reports',
        label: t('drawer.menu.safetyReports'),
        isSubMenu: true,
      },
      {
        id: 'hospital-insurance',
        label: t('drawer.menu.hospitalInsurance'),
        isSubMenu: true,
      },
      {
        id: 'working-hours',
        label: t('drawer.menu.workingHours'),
        isSubMenu: true,
      },
      {
        id: 'salary-vacation',
        label: t('drawer.menu.salaryAndVacation'),
        isSubMenu: true,
      },
      {
        id: 'outlay-food',
        label: t('drawer.menu.outlayFood'),
        isSubMenu: true,
      },
      {
        id: 'pension-insurance',
        label: t('drawer.menu.pensionInsurance'),
        isSubMenu: true,
        items: [
          {
            id: 'pension-insurance-children-1',
            label: t('drawer.menu.pensionInsurance'),
            isSubMenu: true,
            isFinalLevel: true,
          },
        ],
      },
    ],
  },
  {
    id: 'company-spintr',
    label: t('drawer.menu.theCompanySpintr'),
    icon: 'building',
  },
  {
    id: 'our-mission',
    label: t('drawer.menu.ourMission'),
    icon: 'programming',
  },
]

export const Drawer: React.FC<IDrawerProps> = ({ navigation }) => {
  const [expanded, setExpanded] = useState<string[]>([])

  const onSelectMenu = useCallback(
    (id: string) => {
      if (id === 'home') {
        navigation.navigate('Home')
        return
      }
      if (id === 'pension-insurance-children-1') {
        navigation.navigate('NewsDetail', { title: t('drawer.menu.pensionInsurance') })
        return
      }
      if (id === 'our-mission') {
        navigation.navigate('Operating')
        return
      }
      const included = expanded.includes(id)
      if (included) {
        setExpanded(expanded.filter((v) => v !== id))
      } else {
        setExpanded([...expanded, id])
      }
    },
    [expanded, navigation],
  )

  return (
    <Container row={false} gap={24} style={styles.container}>
      <Button onPress={() => navigation.closeDrawer()}>
        <Icon name="close-circle" />
      </Button>
      <SearchInput
        debounce={0}
        placeholder={t('drawer.search.placeholder')}
        onSearch={(_v) => console.log({ search: _v })}
      />
      <Container row={false} gap={8} style={styles.menusContainer}>
        <TextView style={styles.title}>{t('drawer.title')}</TextView>
        <ScrollContainer style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {items.map((item) => (
            <MenuItem key={item.id} item={item} expanded={expanded} onSelect={onSelectMenu} />
          ))}
        </ScrollContainer>
      </Container>
    </Container>
  )
}

export default Drawer
