import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import PrimeVue from 'primevue/config';
import store from './store'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'



const app = createApp(App)
app.use(PrimeVue, { inputStyle: 'filled', ripple: true })
app.use(store)
app.use(router)
app.mount('#app')
