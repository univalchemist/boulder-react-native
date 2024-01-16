import { Dimensions, Platform } from 'react-native'

import { TLang } from '@/types'

export const SERVER_ENDPOINT = __DEV__ ? 'http://localhost:4001' : 'http://localhost:4001'

export const IS_IOS = Platform.OS === 'ios'

export const APP_LANG_KEY = '@lang'
export const APP_TOKEN_KEY = '@token'

export const APP_LANGUAGES: Record<TLang, TLang> = {
  en: 'en',
}

export const NAV_HEADER_OPTION = {
  headerShown: false,
  headerShadowVisible: false,
  headerTransparent: true,
}

export const SCREEN_HEIGHT = Dimensions.get('window').height
export const SCREEN_WIDTH = Dimensions.get('window').width

export const MIN_COMPOSER_HEIGHT = Platform.select({
  ios: 33,
  android: 41,
  web: 34,
})
export const MAX_COMPOSER_HEIGHT = 200
export const DEFAULT_PLACEHOLDER = 'Type a message...'
export const DATE_FORMAT = 'll'
export const TIME_FORMAT = 'LT'

export const TEST_ID = {
  WRAPPER: 'GC_WRAPPER',
  LOADING_WRAPPER: 'GC_LOADING_CONTAINER',
  SEND_TOUCHABLE: 'GC_SEND_TOUCHABLE',
}

export const ME_MOCK = {
  firstName: 'Shahadat',
  lastName: 'Mahmud',
  email: 'shahadatmahmud99@gmail.com',
}
export const MIN_INPUT_TOOLBAR_HEIGHT = 44
