<template>
  <div class="hello">
    <h1 @click="change" ref='msg'>{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到dddds！'
    }
  },
  methods:{
    change (){
        this.$refs.msg.style.color='red'
    }
  }
}
</script>
<style>
    h1{
        font-size:.5rem;
    }
</style>