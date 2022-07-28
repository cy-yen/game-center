import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import router from './router'
import i18n from './i18n'
import 'lib-flexible'

createApp(App).use(router).use(i18n).mount('#app')
