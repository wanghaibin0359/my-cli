<template>
    <div>
        <!-- <home /> -->

        <!-- <svg-icon iconName="bug" class-name="red"></svg-icon> -->
        <w-form></w-form>
        <button @click="$store.commit('increment' ,3)">increment++</button>
        {{$store.state.count}} -----{{$store.getters.double}}
        <button @click="$store.commit('decrement')">decrement--</button>
        <button @click="$store.dispatch('increment')">incrementTimeout++</button>
    </div>
</template>

<script>
import WForm from "./components/form";
export default {
    components: {
        WForm,
    },
    created() {
        console.log(this.$store.state);
    },
    methods: {},
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