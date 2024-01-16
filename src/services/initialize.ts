import { I18nManager } from 'react-native'
import { enableScreens, enableFreeze } from 'react-native-screens'

export default () => {
  // https://reactnavigation.org/docs/react-native-screens
  enableFreeze(true)
  // enabling screen makes useIsFocused not changed
  enableScreens(false)

  I18nManager.swapLeftAndRightInRTL(true)
}
