import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './utils/i18n'
import 'lib-flexible'
import { Popup, Overlay, Switch, Swipe, SwipeItem, Button } from 'vant'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useStore } from './store/index'

import './assets/styles/index.css'
import 'vant/lib/index.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

const store = useStore()

app.use(router)
app.use(i18n)

//use vant components
app.use(Popup)
app.use(Overlay)
app.use(Switch)
app.use(Swipe)
app.use(SwipeItem)
app.use(Button)

app.mount('#app')
