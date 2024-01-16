import { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'

export const useKeyboardEvent = () => {
  const [isKeyboardShow, setIsKeyboardShow] = useState<boolean>(false)
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', (e) => {
      setIsKeyboardShow(true)
      setKeyboardHeight(e.endCoordinates.height)
    })
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
      setIsKeyboardShow(false)
      setKeyboardHeight(0)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  return { isKeyboardShow, keyboardHeight }
}
