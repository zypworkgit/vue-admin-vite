import { createI18n } from "vue-i18n";
import en from './en'
import zh from './zh'
const messages = {
    en: {
        ...en
    },
    zh: {
        ...zh
    }
}

const getCurrentLanguage = () => {
    const UAlang = navigator.language
    const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
    localStorage.setItem('lang', langCode)
    return langCode
}

const i18n = createI18n({
    globalInjection: true,
    legacy: false,
    locale: getCurrentLanguage() || 'zh',
    messages: messages
})

export default i18n