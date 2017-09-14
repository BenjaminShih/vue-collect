import css3Route from './css3/routes'
import css2Route from './css2/routes'
import css from './css.vue'

export default {
  component: css,
  subRoutes: {
    '/css3': css3Route,
    '/css2': css2Route,
  }
}
