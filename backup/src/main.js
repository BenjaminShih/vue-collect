// import Vue from 'vue' // 不需要了，因为vue-router模式下封装了实例生成方式
import App from './views/App.vue'
import './config'
import router from './router'

require('bootstrap/dist/css/bootstrap.css') // 引入bootstrap
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })  // 不需要了，因为vue-router模式下封装了实例生成方式

router.start(App, '#app') // 使用vue-router 创建实例并启动应用
