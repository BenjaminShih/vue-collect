import Loading from './loading.vue'

export default {
  /**
   * 安装插件
   * @param {Object} Vue - Vue类
   * @param {Object} [pluginOptions] - 插件安装配置
   */
  install(Vue, pluginOptions = {}) {
    const VueLoading = Vue.extend(Loading)
    let loading = null

    /**
     * 初始化并显示loading
     * @returns {Promise} Promise实例
     */
    function $loading() {
      return new Promise((resolve) => {
        // 第一次调用
        if (!loading) {
          loading = new VueLoading()
          loading.$mount()
          document.querySelector(pluginOptions.container || 'body').appendChild(loading.$el)
        }
        loading.show()
        resolve()
      })
    }

    $loading.end = (noAnimate = false) => {
      return new Promise((resolve) => {
        if (!loading || !loading.isShow) {
          resolve()
          return
        }
        // 首页判断是否在关闭时需要动画
        if (noAnimate) {
          // 默认只在此次行为下移除动画,之后的行为仍有动画
          loading.removeAnimate().then(() => {
            loading.opemAnimate()
          })
        }

        loading.hide()
      })
    }

    Vue.loading = Vue.prototype.$loading = $loading
  },
}
