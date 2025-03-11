import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import i18n from './i18n';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


import './assets/styles.css'
createApp(App)
    .use(router)
    .use(store)
    .use(i18n)
    .mount('#app')
