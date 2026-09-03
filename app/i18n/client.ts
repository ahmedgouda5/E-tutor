"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import enTranslations from "@/public/locales/en/translation.json";
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
    // Server-side (build time) configuration - use the same English
    // translations as the client so SSR output matches hydration.
    i18n.use(initReactI18next).init({
      fallbackLng: "en",
      lng: "en",
      debug: false,
      react: {
        useSuspense: false,
      },
      resources: {
        en: { translation: enTranslations },
      },
      interpolation: {
        escapeValue: false,
      },
    });
  }
}

export default i18n;
