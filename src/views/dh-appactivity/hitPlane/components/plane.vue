<template>
    <div>
        <canvas id='canvas' ref='cas'></canvas>
    </div>
</template>
<script>
export default {
  name: 'plane',
  data () {
    return {

    };
  },
  mounted () {
    this.init();
  },
  methods:{
    change () {
        this.$refs.msg.style.color='red'
    },
    init () {
        var cas = document.getElementById('canvas');
        var ctx = cas.getContext("2d");
        var img = new Image();

        img.onload = function () {
            ctx.clearRect(0, 0, cas.width, cas.height);
            ctx.drawImage(img, 50, 300);
        }
        img.src = "../imgs/plane.jpg";
            var flag = 0;   //方向的标志

            //*************按方向键，让人物转变方向 左-37 上-38 右-39 下-40 *******************
           document.onkeyup = function (e) {
               switch (e.keyCode) {
                   case 37:
                       flag = 1;
                       break;
                   case 38:
                       flag = 3;
                       break;
                   case 39:
                       flag = 2;
                       break;
                   case 40:
                       flag = 0;
                       break;
               }
           };
    }
  }
};
</script>
<style>
    div{
    width:100%;
    height:100%
    }
    canvas{
        width:100%;
        height:100%
    }
  img{
    width:100px;
    height:100px
  }
</style>