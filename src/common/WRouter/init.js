import link from './link.js'
import view from './view.js'
let Vue = null
export default class VueRouter {
    constructor(opts) {
        this.$opts = opts
        Vue.util.defineReactive(this, 'current', '/')
        Vue.util.defineReactive(this, 'matched', [])

        let initial = window.location.hash.slice(1) | '/'
        // this.current = initial
        this.match()
        window.addEventListener('load', this.change.bind(this))
        window.addEventListener('popstate', this.change.bind(this))
    }
    change() {
        this.current = window.location.hash.slice(1)
        this.$opts.mode && this.$opts.mode == 'history' && this.pushState()
        this.matched = []
        this.match()
    }
    pushState() {
        window.history.pushState({ key: this.current }, null, this.current)
    }
    match(routes, prePath) {
        routes = routes || this.$opts.routes
        for (const route of routes) {
            if (this.current == '/' && route.path == '/') {
                this.matched.push(route)
                return
            }
            let path = prePath ? (prePath + '/' + route.path) : route.path
            if (route.path != '/' && this.current.indexOf(path) > -1) {
                this.matched.push(route)
                if (route.children) {
                    this.match(route.children, path)
                    return
                }
            }
        }

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
