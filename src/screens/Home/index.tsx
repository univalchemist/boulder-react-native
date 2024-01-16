import React, { useCallback, useRef } from 'react'

import { t } from '@/i18n'
import { Container, Icon, MessageInput } from '@/components'
import { NavContainer, NavButton } from '@/navigation'
import { NotificationProvider } from '@/contexts'
import { useKeyboardEvent } from '@/hooks'
import { INotification, IOption, IPosition, StackProps, TNotificationCategory } from '@/types'

import ActionMenu from './components/actionMenu'
import Announcement from './components/announcement'
import NotificationView from './components/notificationView'
import styles from './styles'

const HomeScreen = ({ route, navigation }: StackProps<'Home'>) => {
  const notificationViewRef = useRef<React.ElementRef<typeof NotificationView>>(null)
  const { isKeyboardShow } = useKeyboardEvent()

  const onSendMessage = useCallback(
    (data: string) => {
      // TODO
      console.log(data)
      navigation.navigate('Chat')
    },
    [navigation],
  )

  const onViewNotifications = useCallback(
    (_category: IOption<TNotificationCategory>, _data: INotification[], _pos: IPosition | null) => {
      notificationViewRef.current?.show(_category, _data, _pos)
    },
    [],
  )

  return (
    <NotificationProvider>
      <NavContainer
        headerStyle={styles.header}
        left={
          <NavButton onPress={() => route.params.navigation.openDrawer()}>
            <Icon name="menu" />
          </NavButton>
        }
        right={
          <ActionMenu
            onViewNotifications={onViewNotifications}
            onCloseActionMenu={() => notificationViewRef.current?.hide()}
          />
        }
      >
        <Container
          row={false}
          alignItems="center"
          justifyContent="space-between"
          style={styles.container}
        >
          <Announcement />
          <Container row={false} style={[styles.inputArea, isKeyboardShow && { paddingBottom: 0 }]}>
            <MessageInput placeholder={t('message.input.placeholder')} onSubmit={onSendMessage} />
          </Container>
        </Container>
        <NotificationView ref={notificationViewRef} />
      </NavContainer>
    </NotificationProvider>
  )
}

export default HomeScreen
