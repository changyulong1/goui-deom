import Doc from './views/Doc.vue'
import Home from './views/Home.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
import Intro from './views/Intro.vue'
import GetStarted from './views/GetStarted.vue'
import Install from './views/Install.vue'
import {createWebHashHistory,createRouter} from 'vue-router'
import marked from './components/marked.vue'
import { h } from 'vue'

const history = createWebHashHistory()

export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component: Home},
        {
            path:'/Doc',
            component:Doc,
            children:[
                {path:'',component:DocDemo},
                {path:'intro',component:h(marked,{path:'../markdown/intro.md',key:1})},
                {path:'get-started',component:h(marked,{path:'../markdown/get-started.md',key:2})},
                { path: "install", component: h(marked,{path:'../markdown/install.md',key:3}) },
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabsDemo}
            ],
        },
    ],
})

router.afterEach(() => {
    console.log("路由切换了");
  });
