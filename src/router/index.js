import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../view/hello'
import book from '../view/book'
import checkbox from '../view/checkbox'
import scrollfixed from '../view/scroll-fixed'
import flowerbtn from '../view/flower-btn'
import ellipsis from '../view/ellipsis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    }, {
      path: '/book',
      name: 'book',
      component: book
    }, {
      path: '/checkbox',
      name: 'checkbox',
      component: checkbox
    }, {
      path: '/scrollfixed',
      name: 'scrollfixed',
      component: scrollfixed
    }, {
      path: '/flowerbtn',
      name: 'flowerbtn',
      component: flowerbtn
    }, {
      path: '/ellipsis',
      name: 'ellipsis',
      component: ellipsis
    }
  ]
})
