import Vue from 'vue'
import hello from './components/hello.vue';
import plane from './components/plane.vue';
import './assets/index.less';

import img1 from './imgs/logo.jpg';
import img2 from './imgs/plane.jpg';
import img3 from './imgs/logo.jpg';

new Vue({
    el:'#app',
    data:function () {
        return {
            imgList:[
                {
                    src:img1
                },
                {
                    src:img2
                },
                {
                    src:img3
                }
            ]
        };
    },
    components:{
        hello:hello,
        plane:plane
    }
})