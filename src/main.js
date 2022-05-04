import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import PrimeVue from 'primevue/config';
import store from './store'
import Tooltip from 'primevue/tooltip';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import '@/assets/icon/icon.scss'
import 'primeicons/primeicons.css';
import '@/assets/app.scss';



const app = createApp(App)
app.use(PrimeVue, { inputStyle: 'filled', ripple: true })
app.directive('tooltip', Tooltip);
app.use(store)
app.use(router)
app.mount('#app')
