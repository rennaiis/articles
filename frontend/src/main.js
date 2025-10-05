import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
}
)

import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(vuetify)
app.mount('#app')
