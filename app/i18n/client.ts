"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .use(HttpBackend)
    .init({
      fallbackLng: "en",
      lng: "en",
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: "/locales/{{lng}}/translation.json",
      },
    });
}

export default i18n;
