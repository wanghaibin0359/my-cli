
// 模拟 vur-router 路由守卫 执行 
function beforeEach(to, from, next) {
    console.log("beforeEach")
    next()
}
function active(to, from, next) {
    console.log("active")
    next()
}
function actived(to, from, next) {
    console.log("actived")
    next()
}
let queue = [beforeEach, active, actived]

let route = "/a", current = "/b"
const iterator = (guardhook, next) => {
    guardhook(route, current, (to) => {
        if (to === false) {
            console.log('stop')
        } else {
            next(to)
        }
    })
}

const runQueue = (queue, fn, cb) => {
    const step = (index) => {
        if (index >= queue.length) {
            cb()
        } else {
            if (queue[index]) {
                fn(queue[index], () => {
                    step(index + 1)
                })
            } else {
                step(index + 1)
            }
        }
    }
    step(0)
}
runQueue(queue, iterator, () => {
    console.log('应该不会执行')
})