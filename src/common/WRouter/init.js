import link from './link.js'
import view from './view.js'
let Vue = null
export default class VueRouter {
    constructor(opts) {
        this.$opts = opts
        Vue.util.defineReactive(this, 'current', '/')

        let initial = window.location.hash.slice(1) | '/'
        this.current = initial

        window.addEventListener('load', this.change.bind(this))
        window.addEventListener('hashchange', this.change.bind(this))
    }
    change() {
        this.current = window.location.hash.slice(1)
        console.log('change ')
    }

}

VueRouter.install = (_Vue) => {
    Vue = _Vue
    _Vue.component('router-link', link)
    _Vue.component('router-view', view)
    _Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                _Vue.prototype.$router = this.$options.router
            }
        }
    })
}
