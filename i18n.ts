import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import mm from "./locales/mm.json";
import th from "./locales/th.json";

i18n
  .use(LanguageDetector) // auto-detect browser language
  .use(initReactI18next) // connect with React
  .init({
    resources: {
      en: { translation: en },
      mm: { translation: mm },
      th: { translation: th },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false, // react already escapes
    },
  });

export default i18n;
