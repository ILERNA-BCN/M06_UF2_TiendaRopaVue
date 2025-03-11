import { createI18n } from 'vue-i18n';

// Importa los archivos de traducción
import ca from './locales/ca.json';
import es from './locales/es.json';
import en from './locales/en.json';

// Crea la instancia de i18n
const i18n = createI18n({
  legacy: false, 
  locale: localStorage.getItem('lang') || 'ca',
  fallbackLocale: 'ca', 
  messages: { ca, es, en },
});

export default i18n;