<template>
    <div>
        hello word
        <home />
        <div class="icon">
            <span @click="onClick">{{a}}</span>
            <svg-icon iconName="bug" class-name="red"></svg-icon>
            <!-- <svg class="icon" aria-hidden="true" focusable="false">
                <use xlink:href="#icon-bug" />
            </svg>-->
        </div>
    </div>
</template>

<script>
// import "./icon/bug.svg";
import home from "@/components/home";
export default {
    data() {
        return { a: 1123 };
    },
    components: {
        home,
    },
    methods: {
        onClick() {
            this.a += 1;
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