import materialDesignByselfRoutes from './material-design-byself/routes'
import loadView from 'utils/async-view-loader'

import css3 from './css3.vue'
export default {
  component: css3,
  subRoutes: {
    '/materialDesignByself': materialDesignByselfRoutes,
    '/button': {
      component: loadView((loaded) => {
        require(['views/css/css3/button.vue'], loaded)
      })
    },
    '/shapes': {
      component: loadView((loaded) => {
        require(['views/css/css3/shapes.vue'], loaded)
      })
    },
    '/imgShine': {
      component: loadView((loaded) => {
        require(['views/css/css3/img-shine.vue'], loaded)
      })
    },
    '/3dBox': {
      component: loadView((loaded) => {
        require(['views/css/css3/3d-box.vue'], loaded)
      })
    }
  }
}
