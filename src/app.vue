<template>
    <div>
        hello word
        <home />
        <div class="icon">
            <svg-icon iconName="bug" class-name="red"></svg-icon>
            <!-- <svg class="icon" aria-hidden="true" focusable="false">
                <use xlink:href="#icon-bug" />
            </svg>-->
        </div>
    </div>
</template>

<script>
import "./icon/bug.svg";
import home from "@/components/home";
export default {
    components: {
        home,
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