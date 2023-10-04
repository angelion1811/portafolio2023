import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
const fallbackLng = ['en', 'es']
const production = false;

const options = production?{
  fallbackLng,// use en if detected lng is not available
  saveMissing: true ,
  // send not translated keys to endpoint
  interpolation: {
    escapeValue: false,
  },
  backend: {
    //                 ⬇️
    loadPath: 'https://angelion1811.github.io/portafolio2023/locales/{{lng}}/{{ns}}.json',
  },
  
}:{
    fallbackLng,// use en if detected lng is not available
    saveMissing: true 
}
i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(options);

export default i18n;