import i18n, { t as _t } from 'i18next'
import { initReactI18next } from 'react-i18next'
import intervalPlural from 'i18next-intervalplural-postprocessor'

import resources from './locale'

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: (cb: any) => cb('en'),
  init: () => null,
  cacheUserLanguage: () => null,
}

i18n
  .use(languageDetector)
  .use(intervalPlural)
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources,
    debug: true,
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    ns: ['translation', 'thermography'],
    interpolation: {
      escapeValue: false,
    },
  })

export const t = _t

export default i18n
