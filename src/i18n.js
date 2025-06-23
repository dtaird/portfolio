import i18next from "i18next";
import global_en from "./translations/en/global.json";
import global_ru from "./translations/ru/global.json";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    fallbackLng: "en",
    resources: {
      en: { translation: global_en },
      ru: { translation: global_ru },
    },
  });

export default i18next;
