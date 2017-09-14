import loadView from 'utils/async-view-loader.js'
import css2 from './css2.vue'

export default {
  component: css2,
  subRoutes: {
    '/align': {
      component: loadView((loaded) => (
        require(['views/css/css2/align.vue'], loaded)
      ))
    }
  },
}
