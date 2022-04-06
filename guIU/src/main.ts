import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Doc from './views/Doc.vue'
import Doc2 from './views/Doc2.vue'
import {createWebHashHistory,createRouter} from 'vue-router'

const history = createWebHashHistory()

const router = createRouter({
    history:history,
    routes:[
        {path:'/',component: Doc},
        {path:'/Doc',component:Doc2}
    ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')
