import React, { useCallback, useEffect, useState } from 'react'

import { t } from '@/i18n'
import { Container } from '@/components'
import { INotification, IOption, IPosition, TNotificationCategory } from '@/types'
import { useNotification } from '@/hooks'

import Trigger from './trigger'
import MenuButton from './menuButton'
import styles from './styles'

export interface IActionMenu {
  key: TNotificationCategory
  icon: string
  title: string
}

const menus: IOption<TNotificationCategory>[] = [
  {
    id: 'kpis',
    label: t('home.actionMenu.kpis'),
    icon: 'kpi-menu',
    value: 'kpis',
  },
  {
    id: 'news',
    label: t('home.actionMenu.news'),
    icon: 'news-menu',
    value: 'news',
  },
  {
    id: 'calendar',
    label: t('home.actionMenu.calendar'),
    icon: 'calendar-menu',
    value: 'calendar',
  },
  {
    id: 'operations',
    label: t('home.actionMenu.operations'),
    icon: 'operations-menu',
    value: 'operations',
  },
]

interface Props {
  onViewNotifications: (
    _category: IOption<TNotificationCategory>,
    _data: INotification[],
    _pos: IPosition | null,
  ) => void
  onCloseActionMenu: () => void
}

const ActionMenu: React.FC<Props> = ({ onViewNotifications, onCloseActionMenu }) => {
  const { byCategory, totalUnread } = useNotification()
  const [open, setOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<TNotificationCategory | null>(null)

  useEffect(() => {
    if (!open) {
      onCloseActionMenu()
    }
  }, [onCloseActionMenu, open])

  const onPressMenu = useCallback(
    (category: IOption<TNotificationCategory>, data: INotification[], pos: IPosition | null) => {
      setSelected((prev) => (prev === category.value ? prev : category.value))
      onViewNotifications(category, data, pos)
    },
    [onViewNotifications],
  )

  return (
    <Container
      alignItems="center"
      justifyContent="flex-end"
      style={styles.actionMenuContainer}
      gap={22}
      pointerEvents="box-none"
    >
      <Container
        gap={17}
        alignItems="center"
        justifyContent="flex-end"
        style={styles.menusContainer}
      >
        {menus.map((c, idx) => (
          <MenuButton
            key={idx}
            index={open ? menus.length - idx - 1 : idx}
            open={open}
            category={c}
            active={selected === c.value}
            data={byCategory[c.value]}
            onPress={onPressMenu}
          />
        ))}
      </Container>
      <Trigger
        totalUnread={totalUnread}
        open={open}
        onToggle={() => {
          setSelected(null)
          setOpen(!open)
        }}
      />
    </Container>
  )
}

export default ActionMenu
