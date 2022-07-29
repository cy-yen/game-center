import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import router from './router'
import i18n from './i18n'
import 'lib-flexible'
import { Popup, Overlay, Switch, Swipe, SwipeItem, Button } from 'vant'

createApp(App)
  .use(router)
  .use(i18n)
  .use(Popup)
  .use(Overlay)
  .use(Switch)
  .use(Swipe)
  .use(SwipeItem)
  .use(Button)
  .mount('#app')
