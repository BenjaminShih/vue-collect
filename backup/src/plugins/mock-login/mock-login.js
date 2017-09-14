import Login from './login.vue'

module.exports = {
  install (Vue) {
    (new Vue({
      template: '<login></login>',
      components: {
        Login
      }
    })).$mount().$appendTo('body')
  }
}
