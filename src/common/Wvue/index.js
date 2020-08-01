
class Wvue {
    constructor(opts) {
        this.$options = opts
        this.$data = opts.data
        this.$methods = opts.methods
        observer(opts.data)
        this.proxy(this, '$data')
        this.proxy(this, '$methods', false)
        new Compile(this, opts.el)
    }
    proxy(vm, k, boolean) {
        var origin = vm[k]
        for (let key in origin) {
            Object.defineProperty(vm, key, {
                get() {
                    return origin[key]
                },
                set(k) {
                    if (boolean) return
                    origin[key] = k
                }
            })
        }

    }
}
