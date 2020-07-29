<template>
    <svg :class="classNameS" v-on="$listeners">
        <use :href="Icon" />
    </svg>
</template>

<script>
export default {
    props: {
        className: {
            type: String,
            required: true,
        },
        iconName: {
            type: String,
            required: true,
        },
    },
    computed: {
        Icon() {
            return `#icon-${this.iconName}`;
        },
        classNameS() {
            return "icon " + this.className;
        },
    },
};
</script>

<style scoped>
.icon {
    width: 20px;
    height: 20px;

    fill: currentColor;
    transition: all 0.38s ease-out;
}
.icon:hover {
    color: white;
}
</style>