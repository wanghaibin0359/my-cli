import Vue from 'vue'
import APP from './app'
import './style/index.stylus'
import SvgIcon from './common/icon'

import './common/notice/createPop'

import WRouter from '@/common/WRouter/init'
// import Home from '@/components/home'
import Other from '@/components/other'
Vue.use(WRouter)
Vue.component('svg-icon', SvgIcon)
let catchs = {};
const requireAll = requireContext => requireContext.keys().map(item => {
    catchs[item] = requireContext(item)
})
const req = require.context('./icon', false, /\.svg$/)
requireAll(req)
let routes = [
    { path: "/home", component: require('@/components/home') },
    { path: "/other", component: Other },
    {
        path: "/parent",
        component: require('@/components/parent/index'),
        children: [
            { path: 'child2', component: require('@/components/parent/child2') },
            { path: 'child1', component: require('@/components/parent/child1') },
        ]
    },
]
let router = new WRouter({
    routes
})

let app = new Vue({
    el: '#app',
    router,
    render: (h) => h(APP)
})