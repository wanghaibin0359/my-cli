export default {
    render(h) {
        let component = null;
        let { routes } = this.$router.$opts
        routes.map(route => {
            if (route.path == this.$router.current) {
                component = route.component
            }
        })
        if (component && component.default) {
            component = component.default
        } else if (typeof component === 'function') {
            component = component()
        }
        return h(component)
    }
}