import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter()

router.map(routes)

const ProgressBar = require('progressbar.js')
let line
router.beforeEach((transition) => {
  // console.log('before', transition.to.path, transition.from.path)
  if (line) line.destroy() // 若line未被置空则摧毁
  line = new ProgressBar.Line('body', {
    color: '#009ce5',
    strokeWidth: 0.2,
    svgStyle: {
      position: 'fixed',
      zIndex: '10001',
      top: 0,
      left: 0,
      right: 0,
      maxHeight: '2px'
    }
  })
  line.animate(0.9, {
    duration: 500
  })
  transition.next() // 如果不添加此步骤，进程将会终止，不会展现任何页面
  // transiton.abort()函数将会强行终止后面的任何执行动作
})

router.afterEach(({ to }) => {
  // 设置标题
  global.scrollTo(0, 0)
  // console.log('after', to.path)
  if (line) {
    line.animate(1, {
      duration: 1000
    }, () => {
      // console.log('destroyed')
      line.destroy()
      line = null
    })
  }
})

export default router
