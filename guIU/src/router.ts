import Doc from './views/Doc.vue'
import Home from './views/Home.vue'
import SwitchDemo from './components/Switch/SwitchDemo.vue'
import ButtonDemo from './components/Button/ButtonDemo.vue'
import DialogDemo from './components/Dialog/DialogDemo.vue'
import TabsDemo from './components/Tab/TabsDemo.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
import { createWebHashHistory, createRouter } from 'vue-router'
import marked from './components/marked.vue'
import { h } from 'vue'

const history = createWebHashHistory()
const md = string =>  h(marked, { content: string, key: string })
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/Doc',
            component: Doc,
            children: [
                { path: '',  redirect: '/doc/intro' },
                { path: 'intro', component:md(intro)},
                { path: 'get-started', component: md(getStarted) },
                { path: "install", component: md(install) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo }
            ],
        },
    ],
})
