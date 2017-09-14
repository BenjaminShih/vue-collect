import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入弹出框插件
import makeNotify from 'components/notify'
// import Notifcation from 'components/notification/notification.vue'
import SConfirm from 'components/s-confirm/s-confirm.vue'
import BackgroundShade from 'components/background-shade/background-shade.vue'
import InputFilterSelect from 'components/input-filter-select/input-filter-select.vue'
import MdButton from 'components/md-button/md-button.vue'
import SButton from 'components/s-button/s-button.vue'
import SDropDown from 'components/s-drop-down/s-drop-down.vue'

import IS_DEBUG from 'src/env' // 环境变量，指定是否为开发环境

if (IS_DEBUG) {
  require(['./plugins/mock-login/mock-login.js'], (mockLogin) => {
    Vue.use(mockLogin)
  })
}

// import hello from 'components/hello.vue'
// 路由模块
Vue.use(VueRouter)

// 全局注册组件
// Vue.component('hello', hello)

// use Notify 将插件方法挂载到Vue实例上
Vue.use(makeNotify('notify', 'notification'))
Vue.use(makeNotify('confirm', 'confirm'))

Vue.component('MdButton', MdButton)
Vue.component('SConfirm', SConfirm)
Vue.component('BackgroundShade', BackgroundShade)
Vue.component('InputFilterSelect', InputFilterSelect)
Vue.component('SButton', SButton)
Vue.component('SDropDown', SDropDown)
