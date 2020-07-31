<template>
    <div id="home">
        homddde
        <button @click="pushstate('/an1')">an1</button>
        <button @click="pushstate('/an2')">an2</button>
    </div>
</template>

<script>
export default {
    methods: {
        pushstate(url) {
            window.history.pushState({ a: 1 }, "asdf", url);
        },
    },
};
</script>

<style lang="stylus" scoped>
#home
    color red
</style>