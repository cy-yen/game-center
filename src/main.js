import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './utils/i18n'
import 'lib-flexible'
import { Popup, Overlay, Switch, Swipe, SwipeItem, Button } from 'vant'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './assets/styles/index.css'
import 'vant/lib/index.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
  .use(router)
  .use(i18n)
  .use(Popup)
  .use(Overlay)
  .use(Switch)
  .use(Swipe)
  .use(SwipeItem)
  .use(Button)
  .use(pinia)
  .mount('#app')
