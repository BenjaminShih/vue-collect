import layout from 'components/layout/layout.vue'
import detailRoutes from './views/detail/routes'
import cssRoutes from './views/css/routes'
import jsRoutes from './views/js/routes'

const routes = {
  '/': {
    component: layout,
    subRoutes: {
      '/detail': detailRoutes,
      '/css': cssRoutes,
      '/js': jsRoutes,
    }
  }
}

export default routes
