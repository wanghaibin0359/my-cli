<template>
    <div id="home">homddde 
        <other></other>
    </div>
</template>

<script>
import other from './other'
export default {
    components:{
        other
    },
    inject:['form'],
    provide(){
        return {
            form :this
        }
    },
    created(){
        // console.log(this.form.a)
    }
};
</script>

<style lang="stylus" scoped>
#home
    color red
</style>