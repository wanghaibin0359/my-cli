import Vue from 'vue'
import APP from './app'
import './style/index.stylus'
import SvgIcon from './common/icon'

import Vuex from './common/vuex/index'


Vue.component('svg-icon', SvgIcon)
// require.context('./icon', false, /\.svg$/)
let catchs = {};
const requireAll = requireContext => requireContext.keys().map(item => {
    catchs[item] = requireContext(item)
})

const req = require.context('./icon', false, /\.svg$/)
requireAll(req)
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        double(state) {
            return state.count * 2
        }
    },
    mutations: {
        increment(state, count) {
            state.count += count
        },
        decrement(state) {
            state.count--
        },
    },
    action: {
        increment(context) {
            setTimeout(() => context.commit('increment', 1), 1000)
        }
    }
})


let app = new Vue({
    el: '#app',
    store,
    render: (h) => h(APP)
})