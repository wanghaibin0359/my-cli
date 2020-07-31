
let Vue
class Store {
    constructor(opts) {

        let computed = {}
        this.getters = opts.getters

        for (const key of Object.keys(this.getters)) {
            let fn = this.getters[key]
            computed[key] = () => fn(this.state)
            Object.defineProperty(this.getters, key, {
                get: () => this._vm[key]
            })
        }

        this._vm = new Vue({
            data: {
                $$state: opts.state
            },
            computed
        })
        this.mutations = opts.mutations
        this.actions = opts.action
    }
    get state() {
        return this._vm._data.$$state
    }
    set state(v) {
        console.error('no reset state')
    }

    commit(type, playload) {
        let fn = this.mutations[type].bind(this)
        if (!fn) {
            console.error("is no callback!!!")
            return
        }
        fn(this.state, playload)
    }
    dispatch(type, playload) {
        let fn = this.actions[type].bind(this)
        if (fn) {
            fn(this, playload)
        }
    }
}

function install(_Vue) {
    Vue = _Vue
    _Vue.mixin({
        beforeCreate() {
            if (this.$options.store) { //  这是 跟组件，才会又store属性，
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}
export default { Store, install }