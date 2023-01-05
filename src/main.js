import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/styles/title.css'
import './assets/styles/hamburger.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
