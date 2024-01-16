import { Maybe, TGreeting } from '@/types'
import { Colors } from '@/constants'

export const fullName = (...params: Maybe<string>[]): string => {
  return params.filter((p) => !!p).join(' ')
}

export const getRandomColor = (randomString: string, colors?: string[]): string => {
  const _colors = colors?.length
    ? colors
    : [
        Colors.Blue.Default,
        Colors.Blue.Light,
        Colors.Yellow.Default,
        Colors.Pink.Default,
        Colors.Pink.Light,
        Colors.Green.Light,
      ]
  const sumChars = randomString
    .split('')
    .reduce((acc, _, curIndex) => (acc += randomString.charCodeAt(curIndex)), 0)

  return _colors[sumChars % _colors.length]
}

export const getUserInitial = (name: string): string => {
  return name[0]?.toUpperCase() || ''
}

export const getGreetingTime = (): TGreeting => {
  const hour = new Date().getHours()
  if (hour >= 12 && hour <= 18) return 'afternoon'
  if (hour > 18 && hour <= 23) return 'evening'

  return 'morning'
}
