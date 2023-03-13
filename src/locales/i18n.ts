import i18n, { ResourceLanguage } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { fr } from "./fr";
import { en } from "./en";

type Resources = {
  en: ResourceLanguage;
  fr: ResourceLanguage;
};

const resources: Resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "fr",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
