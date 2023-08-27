import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './utils/languages/en.json'
import ru from './utils/languages/ru.json'
import am from './utils/languages/am.json'

const language = localStorage.getItem("language") ? localStorage.getItem("language") : 'ru'

const resources = {
    en: {
        translation: en
    },
    ru: {
        translation: ru
    },
    am: {
        translation: am
    }
};

i18n.use(initReactI18next)
    .init({
        resources,
        lng: language ?
            language === "en" ? "en" :
                language === "ru" ? "ru" :
                    language === "am" ? "am" :
                        "ru" : "ru",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;