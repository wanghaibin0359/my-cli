<template>
    <div>
        <input v-bind="$attrs" @input="change" :value="value" ref="inputs" />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    name: "kinput",
    inject: ["item", "form"],
    props: ["value"],
    data() {
        return {
            trigger: "blur",
        };
    },
    created() {
        let rule = this.form.rules[this.item.prop];
        rule.filter((valid) => valid.trigger).map(
            (valid) => (this.trigger = valid.trigger)
        );
    },
    mounted() {
        this.$refs.inputs.addEventListener(this.trigger, this.validate);
    },
    methods: {
        change(e) {
            this.$emit("input", e.target.value);
        },
        validate() {
            this.item.validate();
        },
    },
    beforeDestroy() {
        this.$refs.inputs.removeEventListener(this.trigger, this.validate);
    },
};
</script>

<style>
</style>