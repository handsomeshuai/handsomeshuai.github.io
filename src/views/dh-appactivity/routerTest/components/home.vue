<template>
    <div class="home">
        this is the first page!
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: "我是home 组件"
            };
        }
    };
</script>
<style>
    .home{
        background-color: deepskyblue;
    }
</style>