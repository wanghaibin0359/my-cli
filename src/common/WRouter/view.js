export default {
    render(h) {
        let component = null;
        let { routes } = this.$router.$opts
        let matched = this.$router.matched
        this.$vnode.data.routerView = true
        let dept = 0
        let parent = this.$parent
        while (parent) {
            if (parent.$vnode && parent.$vnode.data.routerView) {
                dept++
            }
            parent = parent.$parent
        }

        /*   
          routes.map(route => {
              if (route.path == this.$router.current) {
                  component = route.component
              }
          }) */

        const curmatched = matched[dept]

        component = curmatched && curmatched.component
        if(dept==1){debugger}
        if (component && component.default) {
            component = component.default
        } else if (typeof component === 'function') {
            component = component()
        }
        console.log(component)
        return h(component ? component : null)
    }
}