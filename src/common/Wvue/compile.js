class Compile {
    constructor(vm, el) {
        this.$vm = vm
        this.$root = document.querySelector(el)
        if (this.$root) {
            this.compile(this.$root)
        }
    }
    compile(el) {
        let childNodes = el.childNodes
        childNodes.forEach(node => {
            if (this.isElement(node)) {
                this.compileAttr(node)
            } else if (this.isText(node)) {
                let exp = RegExp.$1
                //{{}} 监听
                new Watch(this.$vm, exp, ((origin) => {
                    return () => {
                        this.compileText(node, origin)
                    }
                })(node.textContent))
                this.compileText(node, node.textContent)
            }
            if (node.childNodes && node.childNodes.length > 0) {
                this.compile(node)
            }

        })
    }
    isElement(node) {
        return node.nodeType === 1
    }
    isText(node) {
        return node.nodeType === 3 && /{{(.*)}}/.test(node.textContent)
    }
    compileAttr(node) {
        let attrs = node.attributes
        Array.from(attrs).map(attr => {
            if (this.isDirective(attr.name)) {
                let dir = attr.name.slice(2)
                let exp = attr.value
                //on:click
                if (attr.name.indexOf('v-on:') == -1) {
                    this[dir] && this[dir](node, exp)
                    new Watch(this.$vm, exp, () => {
                        this[dir](node, exp)
                    })
                } else {
                    let type = dir.slice(3)
                    // 处理 on
                    this['on'](node, type, exp)
                }

            }
        })
    }
    isDirective(attr) {
        return attr.indexOf("v-") == 0;
    }
    compileText(node, originText) {
        node.textContent = originText.replace(/{{(.*)}}/, this.$vm[RegExp.$1])
    }
    text(node, exp) {
        node.textContent = this.$vm[exp]
    }
    html(node, exp) {
        node.innerHTML = this.$vm[exp]
    }
    on(node, type, exp) {
        console.log(node.addEventListener)
        //这其实可以又参数 把 exp （）提取 获取值，传进去
        node.addEventListener(type, (e) => {
            let f = this.$vm[exp].bind(this.$vm)
            f(e)
        })
    }
    bind() {

    }
}