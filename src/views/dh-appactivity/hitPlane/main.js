import Vue from 'vue'
import hello from './components/hello.vue';
import plane from './components/plane.vue';
import './assets/index.less'

new Vue({
    el:'#app',
    data:function () {
        return{

        }
    },
    components:{
        hello:hello,
        plane:plane
    }
})