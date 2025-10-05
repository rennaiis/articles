import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify()

import router from './router'
import store from './store'

createApp(App).use(store).use(router).use(vuetify).mount('#app')
