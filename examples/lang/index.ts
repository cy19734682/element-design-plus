import { createI18n } from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'
import elementEnLocale from 'element-plus/es/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-plus/es/locale/lang/zh-cn'// element-ui lang
import enEmLocale from '../../src/locale/lang/en'
import zhEmLocale from '../../src/locale/lang/zh'

const messages = {
  en: {
    ...enLocale, ...elementEnLocale, ...enEmLocale
  },
  'zh-cn': {
    ...zhLocale, ...elementZhLocale, ...zhEmLocale
  }
}

const i18n = createI18n({
  allowComposition: true,
  globalInjection: true,
  legacy: false,
  locale: JSON.parse(sessionStorage.getItem('main') as string)?.lang || 'zh-cn',
  messages
})

export default i18n
