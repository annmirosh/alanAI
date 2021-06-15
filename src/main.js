import { createApp } from 'vue'
import App from './App.vue'

import { applyPolyfills, defineCustomElements } from '@alan-ai/alan-button/dist/loader'

applyPolyfills().then(() => {
    defineCustomElements();
});
const app = createApp(App)
app.config.productionTip = false;
app.config.isCustomElement = tag => tag.startsWith('alan-')

app.mount('#app')