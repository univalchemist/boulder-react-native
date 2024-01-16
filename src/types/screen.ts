import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'

export type ScreenParams = {
  HomeStack: undefined
  SignIn: undefined
  Home: { navigation: any }
  Chat: undefined
  Calendar: undefined
  News: undefined
  NewsDetail: { id?: string | number; title?: string }
  Operating: undefined
  OperatingDetail: undefined
}

export type StackProps<TRoute extends keyof ScreenParams> = NativeStackScreenProps<
  ScreenParams,
  TRoute
>

export type NavigationProp = NativeStackNavigationProp<ScreenParams>
