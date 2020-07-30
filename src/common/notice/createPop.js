import Vue from 'vue'
import Notice from './Notice'

Vue.use(function (vue) {
    vue.prototype.$create = create
})
export function create(props) {
    let Ctor = Vue.extend(Notice)
    let cop = new Ctor({ propsData: props })
    cop.$mount()

    this.$el.appendChild(cop.$el)
    cop.remove = () => {
        this.$el.removeChild(cop.$el)
        cop.$destroy()
    }

    return cop










    /*     const $vm = new Vue({
            render(h) {
                return h(Notice, { props })
            }
        }).$mount()
        document.body.appendChild($vm.$el)
        $vm.$children[0].remove = () => {
            document.body.removeChild($vm.$el)
            $vm.$destroy()
        }
        return $vm.$children[0] */
}

