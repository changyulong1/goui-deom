import './index.scss'
import './lib/guIu.scss'
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import 'github-markdown-css'
import marked from './components/marked.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Marked',marked)
