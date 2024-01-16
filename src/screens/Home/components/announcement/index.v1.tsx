import React, { useRef } from 'react'
import { Trans } from 'react-i18next'

import { TextView, Helper, Container, Button, IHelper } from '@/components'
import { useNotification } from '@/hooks'
import { ME_MOCK } from '@/constants'
import { RW, fullName, getGreetingTime } from '@/utils'
import Logo from '@/assets/images/logo.svg'
import styles from './styles'

const Announcement: React.FC = () => {
  const { totalUnread } = useNotification()
  const helperRef = useRef<IHelper>(null)

  return (
    <Container row={false} alignItems="center" style={styles.logoContainer}>
      <Helper
        closeOnInteraction
        ref={helperRef}
        style={styles.container}
        arrowStyle={styles.helperArrow}
        show={totalUnread > 0}
        content={
          <TextView style={styles.tooltipText}>
            <Trans
              i18nKey={`home.tooltip.text.${getGreetingTime()}`}
              count={totalUnread}
              values={{
                user: fullName(ME_MOCK.firstName),
                postProcess: 'interval',
                applyPostProcessor: true,
              }}
              components={{
                tag: <TextView style={styles.tooltipUpdates} />,
              }}
            />
          </TextView>
        }
      />
      <Button
        activeOpacity={totalUnread ? 0.9 : 1}
        onPress={() => (totalUnread ? helperRef.current?.show(true) : null)}
      >
        <Logo width={RW(185)} height={RW(185)} />
      </Button>
    </Container>
  )
}

export default Announcement
