class Watch {
    constructor(vm, key, fn) {
        // 在 watch 实例化的时候，让dep 添加自己
        this.$vm = vm
        this.key = key
        Dep.target = this
        vm[key]
        this.Fn = fn
        Dep.target = null
    }
    update() {
        this.Fn.call(this.$vm)
    }
}