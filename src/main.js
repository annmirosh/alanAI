import { createApp } from 'vue'
import App from './App.vue'

import alanBtn from '@alan-ai/alan-button/dist/alanaicomponents'
const app = createApp(App)
app.component('alan-btn', alanBtn)

app.mount('#app')