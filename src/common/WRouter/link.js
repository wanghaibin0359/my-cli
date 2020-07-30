export default {
    functional: true,
    props: {
        to: {
            type: String,
            default: "/"
        },
        tag: {
            type: String,
            default: 'a'
        }
    },
    render(h, context) {
        let change = function b() {
            window.location.hash = context.props.to
        }
        let props = { ...context.data, on: { click: change } }
        return h(context.props.tag, props, context.slots().default)
    },
}
