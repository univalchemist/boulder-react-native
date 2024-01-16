import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { ScreenParams } from '@/types'
import { NAV_HEADER_OPTION, SCREEN_WIDTH } from '@/constants'
import { RW } from '@/utils'
import CustomDrawer from './components/drawer'
import { HomeStack } from './stacks'

const Drawer = createDrawerNavigator<ScreenParams>()

const AppDrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        ...NAV_HEADER_OPTION,
        drawerType: 'front',
        drawerStyle: { width: SCREEN_WIDTH - RW(34) },
        drawerHideStatusBarOnOpen: true,
        swipeEnabled: false,
      }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  )
}

export default AppDrawerNavigator
