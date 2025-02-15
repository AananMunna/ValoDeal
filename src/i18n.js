import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json'
import bnTranslation from './locales/bn.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      bn: {
        translation: bnTranslation
      }
    },
    lng: "bn", // Default language
    fallbackLng: "bn",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
