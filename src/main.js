import Vue from 'vue'
import APP from './app'
import './style/index.stylus'
import SvgIcon from './common/icon'
Vue.component('svg-icon', SvgIcon)
// require.context('./icon', false, /\.svg$/)
let catchs = {};
const requireAll = requireContext => requireContext.keys().map(item => {
    catchs[item] = requireContext(item)
})

const req = require.context('./icon', false, /\.svg$/)
requireAll(req)

let app = new Vue({
    el: '#app',
    render: (h) => h(APP)
})