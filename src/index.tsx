import React from 'react'
import { View } from 'react-native'
import { Host } from 'react-native-portalize'
import { RootSiblingParent } from 'react-native-root-siblings'

import { useAuth } from '@/hooks'
import AppDrawerNavigator from '@/navigation/AppDrawerNavigator'
import AuthNavigator from '@/navigation/AuthNavigator'

const App = () => {
  const { authenticated } = useAuth()

  return (
    <RootSiblingParent>
      <Host>
        <View style={{ flex: 1 }}>
          {authenticated ? <AppDrawerNavigator /> : <AuthNavigator />}
        </View>
      </Host>
    </RootSiblingParent>
  )
}
export default App
