<template>
    <div class="whbPopWindow" v-if="isShow">
        <h3 v-if="title">
            {{title}}
            <button @click="closed">关闭</button>
        </h3>
        <div class="box-content">{{message}}</div>
    </div>
</template>

<script>
export default {
    name: "notice",
    props: {
        title: {
            type: String,
            default: "",
        },
        message: {
            type: String,
            default: "",
        },
        duration: {
            type: Number,
            default: 3000,
        },
    },
    mounted() {},
    data() {
        return {
            isShow: false,
        };
    },
    methods: {
        closed() {
            this.isShow = false;
            this.remove();
        },
        show() {
            // setTimeout(this.closed, this.duration);
            this.isShow = true;
        },
    },
};
</script>
<style scoped>
.whbPopWindow {
    position: fixed;
    width: 70%;
    top: 16px;
    left: 50%;
    z-index: 1000;
    transform: translateX(-50%);
    text-align: center;
    pointer-events: none;
    background-color: #fff;
    border: grey 3px solid;
    box-sizing: border-box;
}
.box-content {
    width: 200px;
    margin: 10px auto;
    font-size: 14px;
    padding: 8px 16px;
    background: #fff;
    border-radius: 3px;
    margin-bottom: 8px;
}
</style>