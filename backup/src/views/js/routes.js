import js from './js.vue'
import loadView from 'utils/async-view-loader'

export default {
  component: js,
  subRoutes: {
    '/vueGame': {
      component: loadView((loaded) => {
        require(['./vue-game.vue'], loaded)
      }),
      title: 'vueGame'
    },
  }
}
