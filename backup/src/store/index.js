import Vuex from 'vuex'
import Vue from 'vue'
import modules from './modules'
import createLogger from 'vuex/logger'

const debug = process.env.NODE_ENV !== 'production' // 只能用于开发环境

Vue.use(Vuex)

let middlewares = []

if (debug) {
  middlewares.push(createLogger({
    transformer (state) {
      //输出前对state进行转换
      // 比如说只返回一个sub-tree
      return state.subTree
    },
  }))
}

const store = new Vuex.store({
  strict: debug,
  modules,
  middlewares,
})

export default store
