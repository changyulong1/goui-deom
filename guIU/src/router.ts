import Doc from './views/Doc.vue'
import Home from './views/Home.vue'
import {createWebHashHistory,createRouter} from 'vue-router'

const history = createWebHashHistory()

export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component: Home},
        {path:'/Doc',component:Doc}
    ]
})
