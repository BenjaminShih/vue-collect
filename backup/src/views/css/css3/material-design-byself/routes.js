import loadView from 'utils/async-view-loader'

export default {
  component: require('./material-design-byself.vue'),
  subRoutes: {
    '/show': {
      component: loadView((loaded) => {
        require(['views/css/css3/material-design-byself/show.vue'], loaded)
      }),
      title: 'materialDesignByself'
    }
  }
}
