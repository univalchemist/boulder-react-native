import React, { useEffect, useRef, useState } from 'react'
import { Animated, Easing } from 'react-native'
import RadialGradient from 'react-native-radial-gradient'

import { TextView, Container } from '@/components'
import LogoBg from '@/assets/images/ellipse.png'
import Logo from '@/assets/images/logo.svg'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants'
import styles from './styles'
import { RW } from '@/utils'
import { t } from '@/i18n'

interface Props {
  onLoadEnd: () => void
}

const Splash: React.FC<Props> = ({ onLoadEnd }) => {
  const bgOpacity = useRef(new Animated.Value(0.25))
  const logoOpacity = useRef(new Animated.Value(0))
  const scale = useRef(new Animated.Value(1.1))
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    bgOpacity.current.setValue(0)
    Animated.timing(bgOpacity.current, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start()
    Animated.timing(logoOpacity.current, {
      toValue: 1,
      duration: 1000,
      delay: 1000,
      useNativeDriver: false,
    }).start()
    Animated.timing(scale.current, {
      toValue: 1,
      duration: 2000,
      delay: 1500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        // TODO We will need to do initial API fetching instead of setTimeout
        setTimeout(() => {
          setLoaded(true)
        }, 1000)
      }
    })
  }, [])

  useEffect(() => {
    if (loaded) {
      onLoadEnd()
    }

    return () => {
      console.log('Unmount splash screen')
    }
  }, [loaded, onLoadEnd])

  return (
    <Container alignItems="center" justifyContent="center" style={styles.container}>
      <Animated.View
        style={[
          styles.background,
          {
            opacity: bgOpacity.current,
          },
        ]}
      >
        <RadialGradient
          style={styles.gradient}
          colors={['#FBB5D4CC', '#FBB5D400']}
          stops={[0.4, 1]}
          center={[SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2]}
          radius={0.75 * SCREEN_HEIGHT}
        >
          <Animated.View
            style={[
              styles.logoBgContainer,
              {
                opacity: logoOpacity.current,
              },
            ]}
          >
            <Animated.Image
              source={LogoBg}
              style={[
                styles.logoBg,
                {
                  transform: [
                    {
                      scale: scale.current,
                    },
                  ],
                },
              ]}
            />
            <Animated.View
              style={[
                styles.logoContainer,
                {
                  opacity: logoOpacity.current,
                },
              ]}
            >
              <Logo width={RW(77)} height={RW(77)} />
              <TextView style={styles.splashTitle}>{t('splash.title')}</TextView>
              <TextView style={styles.splashDesc}>{t('splash.description')}</TextView>
            </Animated.View>
          </Animated.View>
        </RadialGradient>
      </Animated.View>
    </Container>
  )
}

export default Splash
