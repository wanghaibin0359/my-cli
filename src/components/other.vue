<template>
    <div>other page</div>
</template>

<script>
export default {
    inject: ["form"],
    created() {
        console.log(this.form);
    },
};
</script>

<style>
</style>