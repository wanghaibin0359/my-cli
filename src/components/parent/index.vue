<template>
    <div id="paernt">
        parent
        <router-link to="/parent/child1" tag="button">child1</router-link>
        <router-link to="/parent/child2" tag="button">child2</router-link>
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style>
#paernt {
    border: 3px solid slateblue;
    padding: 5rem;
}
</style>