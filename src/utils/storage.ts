import AsyncStorage from '@react-native-async-storage/async-storage'

export const getStorageValue = async <T>(key: string, defaultValue?: T): Promise<T | undefined> => {
  try {
    const item = await AsyncStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.log('storage error: ', error)
  }

  return defaultValue
}

export const setStorageValue = <T>(key: string, value: T): void => {
  try {
    if (value === undefined || value === null) {
      AsyncStorage.removeItem(key)
    } else {
      const valueToStore = value instanceof Function ? value(value) : value
      AsyncStorage.setItem(key, JSON.stringify(valueToStore))
    }
  } catch (error) {
    console.log('storage error: ', error)
  }
}

export const removeStorageValue = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key)
}
