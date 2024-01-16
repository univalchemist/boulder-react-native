import React, { useEffect, useState } from 'react'
import { InteractionManager, KeyboardAvoidingView, LogBox } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import RNBootSplash from 'react-native-bootsplash'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import codePush from 'react-native-code-push'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat' // load on demand
import 'react-native-get-random-values' // To use uuid v4 random values

dayjs.extend(localizedFormat) // use plugin

import initialize from '@/services/initialize'
import { AppProvider, AuthProvider } from '@/contexts'
import { IS_IOS } from '@/constants'
import '@/i18n'
import Splash from '@/screens/Splash'
import MyApp from './src'

initialize()

const App = () => {
  const [splashVisible, setSplashVisible] = useState(true)

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      codePush.notifyAppReady()
    })
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <KeyboardAvoidingView behavior={IS_IOS ? 'padding' : undefined} style={{ flex: 1 }}>
          <AppProvider>
            <AuthProvider>
              <NavigationContainer onReady={() => RNBootSplash.hide()}>
                {splashVisible ? <Splash onLoadEnd={() => setSplashVisible(false)} /> : <MyApp />}
              </NavigationContainer>
            </AuthProvider>
          </AppProvider>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: true,
}

const myApp = __DEV__ ? App : codePush(codePushOptions)(App)
export default myApp
