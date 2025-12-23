"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
if (!i18n.isInitialized) {
  if (typeof window !== "undefined") {
    i18n
      .use(initReactI18next)
      .use(HttpBackend)
      .init({
        fallbackLng: "en",
        lng: "en",
        debug: false,
        react: {
          useSuspense: false,
        },
        interpolation: {
          escapeValue: false,
        },
        backend: {
          loadPath: "/locales/{{lng}}/translation.json",
        },
      });
  } else {
    // Server-side (build time) configuration
    i18n.use(initReactI18next).init({
      fallbackLng: "en",
      lng: "en",
      debug: false,
      react: {
        useSuspense: false,
      },
      resources: {
        en: { translation: {} }, // Empty resources for build
      },
      interpolation: {
        escapeValue: false,
      },
    });
  }
}

export default i18n;
