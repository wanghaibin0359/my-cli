import Vue from 'vue'
import APP from './app'
import './style/index.stylus'
import SvgIcon from './common/icon'
Vue.component('svg-icon', SvgIcon)
require.context('./icon', false, /\.svg$/)

let app = new Vue({
    el: '#app',
    render: (h) => h(APP)
})