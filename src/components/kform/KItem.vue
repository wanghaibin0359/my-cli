<template>
    <div>
        <label>{{label}}</label>
        <slot></slot>
        <p v-if="error" style="color:red">{{error}}</p>
    </div>
</template>

<script>
import schema from "async-validator";
export default {
    inject: ["form"],
    provide() {
        return {
            item: this,
        };
    },
    props: {
        label: {
            type: String,
            default: "",
        },
        prop: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            error: "", // 校验错误
        };
    },
    methods: {
        validate() {
            let value = this.form.model[this.prop];
            let validators = this.form.rules[this.prop];
            var validator = new schema({ [this.prop]: validators });
            return validator
                .validate({ [this.prop]: value })
                .then(() => {
                    this.error = "";
                    return Promise.resolve();
                })
                .catch(({ errors, fields }) => {
                    this.error = errors[0].message;
                    return Promise.reject(this.error);
                });
        },
    },
};
</script>

<style>
</style>