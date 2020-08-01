
function observer(obj) {
    if (typeof obj !== 'object' || obj == null) {
        return
    }
    new Observer(obj)
}

function defineReactive(object, key, val) {
    observer(val)

    /* if (typeof obj === 'string') return

    if (Object.prototype.toString.call(obj).slice(8, -1) == 'Object') {
        for (let k in obj) {
            defineReactive(obj, k, obj[k])
            this.walk(obj[k])
        }
    } else if (Object.prototype.toString.call(obj).slice(8, -1) == 'Array') {
        // TODO 处理数组
    } */

    let dep = new Dep()

    Object.defineProperty(object, key, {
        get() {
            Dep.target && dep.append(Dep.target)
            return val
        },
        set(newVal) {
            if (val === newVal) return
            val = newVal
            dep.notify()
        }
    })
}

class Observer {
    constructor(value) {
        this.value = value
        this.walk(value)
    }
    walk(obj) {
        Object.keys(obj).forEach(key => {
            defineReactive(obj, key, obj[key])
        })
    }
}

class Dep {
    constructor(props) {
        this.watchs = []
    }
    append(watch) {
        this.watchs.push(watch)
    }
    notify() {
        this.watchs.forEach(w => w.update())
    }

}
Dep.target = null