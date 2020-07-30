<template>
    <div>
        <!-- <home /> -->

        <!-- <svg-icon iconName="bug" class-name="red"></svg-icon> -->
        <w-form></w-form>
        <router-link to="/home" tag="button" class="aaa" style="color:red" @click="clicks">home</router-link>
        <router-link to="/other" tag="button">other</router-link>
        <router-link to="/parent" tag="button">parent</router-link>
        <router-view />
    </div>
</template>

<script>
import WForm from "./components/form";
export default {
    components: {
        WForm,
    },
    methods: {
        clicks() {
            console.log("click");
        },
    },
};
</script>

<style>
.red {
    color: blue;
}
.red:hover {
    background: blue;
}
</style>