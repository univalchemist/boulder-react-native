import { ReactNode } from 'react'

export type Maybe<T> = T | null | undefined

export type TLang = 'en'

export type TPCallback = (...params: any[]) => void

export type TCallback = () => void

export type TFontWeight =
  | 'black'
  | 'bold'
  | 'light'
  | 'medium'
  | 'regular'
  | 'semibold'
  | 'thin'
  | 'italic'

export interface IFont {
  (
    weight: TFontWeight,
    fontSize?: number,
    color?: string,
    lineHeight?: number | string,
  ): Record<string, any>
}

export interface IMenu {
  id: string
  icon?: string
  label: string
  isSubMenu?: boolean
  isFinalLevel?: boolean
  items?: IMenu[]
}

export type TGreeting = 'morning' | 'afternoon' | 'evening'

export interface IOption<T = string> {
  id: string
  label: ReactNode
  icon?: string
  value: T
}
export interface ISectionItem<T> {
  title: string
  data: T[]
}

export interface ITab<T> {
  key: T
  title: string
}

export interface IPosition {
  top?: number
  right?: number
  bottom?: number
  left?: number
}
