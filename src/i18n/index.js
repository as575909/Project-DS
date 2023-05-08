import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../assets/translations/en.json';
import hi from '../assets/translations/hi.json';

// Initialize i18next

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: en},
    hi: {translation: hi},
  },
  react: {
    useSuspense: false,
  },
});
export default i18next;