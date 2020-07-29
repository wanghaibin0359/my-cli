<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
export default {
    provide() {
        return {
            form: this,
        };
    },
    props: {
        model: {
            type: Object,
            default: true,
        },
        rules: {
            type: Object,
        },
    },
    methods: {
        validate(fn) {
            let task = this.$children
                .filter((child) => child.prop)
                .map((child) => child.validate());
            Promise.all(task)
                .then((res) => {
                    console.log("验证成功！")
                })
                .catch((e) => {
                    console.log("验证失败！")
                });
        },
    },
};
</script>

<style>
</style>