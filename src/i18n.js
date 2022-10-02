import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1:
              "Roll until all dice are the same. Click each die to freeze it at its current value between rolls",
            part2: "New Game",
            part3: "Roll",
          },
        },
      },
      de: {
        translation: {
          description: {
            part1:
              "Rollen Sie, bis alle Würfel gleich sind. Klicken Sie auf jeden Würfel, um ihn zwischen den Würfen auf seinem aktuellen Wert einzufrieren",
            part2: "Neues Spiel",
            part3: "Rollen",
          },
        },
      },
      ru: {
        translation: {
          description: {
            part1:
              "Играйте до тех пор, пока все кубики не станут одинаковыми. Нажмите на каждый кубик, чтобы заморозить его текущее значение между бросками.",
            part2: "Новая игра",
            part3: "Бросок костей",
          },
        },
      },
    },
  });

export default i18n;
