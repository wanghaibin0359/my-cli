<template>
    <div>
        <h3>表单</h3>
        <k-form ref="form" :model="user" :rules="rules">
            <k-item label="用户名" prop="user">
                <KInput type="text" v-model="user.user"></KInput>
            </k-item>
            <k-item label="密码" prop="password">
                <KInput type="password" v-model="user.password"></KInput>
            </k-item>
        </k-form>
        <button @click="submit">提交</button>
    </div>
</template>

<script>
import KForm from "./kform/Kform";
import KInput from "./kform/KInput";
import KItem from "./kform/KItem";
export default {
    components: { KForm, KInput, KItem },
    data() {
        return {
            rules: {
                user: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur",
                    },
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "input" },
                ],
            },
            user: { user: "", password: "" },
        };
    },
    methods: {
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    console.log("提交成功");
                } else {
                    console.err("失败");
                }
            });
        },
    },
};
</script>

<style>
</style>