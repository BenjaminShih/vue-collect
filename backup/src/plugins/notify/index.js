
import makeNotify from './notify'

// let Vue

function override( _vue, funName, component, defaultOptions) {
  const _init = _vue.prototype._init
  const initNotify = makeNotify(_vue, funName, component, defaultOptions)
  _vue.prototype._init = function init (options = {}) {
    options.init = options.init
      ? [initNotify].concat(options.init)
      : initNotify
    _init.call(this, options)
  }
}

export default function (funName, component, options) {
  return {
    install(Vue) {
      // if (Vue) {
      //   console.warn('notify already installed, dont\'t install twice')
      //   return
      // }
      // Vue = _Vue
      override(Vue, funName, component, options)
    }
  }
}
