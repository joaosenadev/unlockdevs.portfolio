import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import { messages } from "./locales"

export const trad = i18n.t

i18n
    .use(LanguageDetector)
    .init({
        debug: false,
        defaultNS: ['translations'],
        fallbackLng: "pt",
        ns: ["translations"],
        resources: messages
    })

export default i18n