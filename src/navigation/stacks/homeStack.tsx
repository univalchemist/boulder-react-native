import React from 'react'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'

import { NAV_HEADER_OPTION } from '@/constants'
import { ScreenParams } from '@/types'
import Home from '@/screens/Home'
import Chat from '@/screens/Chat'
import Calendar from '@/screens/Calendar'
import News from '@/screens/News'
import NewsDetail from '@/screens/NewsDetail'
import Operating from '@/screens/Operating'
import OperatingDetail from '@/screens/OperatingDetail'

const Stack = createStackNavigator<ScreenParams>()

const HomeStack: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...NAV_HEADER_OPTION,
      }}
    >
      <Stack.Screen name="Home" initialParams={{ navigation }} component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      <Stack.Screen name="Operating" component={Operating} />
      <Stack.Screen name="OperatingDetail" component={OperatingDetail} />
    </Stack.Navigator>
  )
}

export default HomeStack
