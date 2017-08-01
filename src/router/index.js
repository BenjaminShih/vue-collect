import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../view/Hello'
import Book from '../view/Book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/book',
      name: 'Book',
      component: Book
    }
  ]
})
