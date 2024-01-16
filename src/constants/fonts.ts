import { TFontWeight } from '@/types'

export const FONT_ELOQUIA_BLACK = 'EloquiaDisplay-Black'
export const FONT_ELOQUIA_BOLD = 'EloquiaDisplay-Bold'
export const FONT_ELOQUIA_LIGHT = 'EloquiaDisplay-Light'
export const FONT_ELOQUIA_MEDIUM = 'EloquiaDisplay-Medium'
export const FONT_ELOQUIA_REGULAR = 'EloquiaDisplay-Regular'
export const FONT_ELOQUIA_SEMIBOLD = 'EloquiaDisplay-Semibold'
export const FONT_ELOQUIA_THIN = 'EloquiaDisplay-Thin'
export const FONT_ELOQUIA_ITALIC = 'EloquiaDisplay-Italic'

export const FONT_MAP: Record<TFontWeight, string> = {
  black: FONT_ELOQUIA_BLACK,
  bold: FONT_ELOQUIA_BOLD,
  light: FONT_ELOQUIA_LIGHT,
  medium: FONT_ELOQUIA_MEDIUM,
  regular: FONT_ELOQUIA_REGULAR,
  semibold: FONT_ELOQUIA_SEMIBOLD,
  thin: FONT_ELOQUIA_THIN,
  italic: FONT_ELOQUIA_ITALIC,
}
