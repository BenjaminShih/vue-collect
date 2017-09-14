
function makeTemplate(component, options, hyphenate) {
  // component should be a-b

  let keys = Object.keys(options)

  let props = keys.reduce((result, key) => {
    result += ':' + hyphenate(key) + '="' + key + '"' + ' '
    return result
  }, '')

  return `<${component} ${props}/>`
}

export default function makeNotify(vue, funName, component, defaultOptions = {}) {
  const FragmentFactory = vue.FragmentFactory
  // const extend = vue.util.extend
  const hyphenate = vue.util.hyphenate

  if (!component) {
    console.warn('you should specify a component to make your notify work')
  }

  component = component || 'div'
  component = hyphenate(component)

  return function initNotify() {
    this[`$${funName}`] = function notify(options = {}) {
      // 返回promise,让在关闭后的继续做一些事情
      return new Promise((resolve) => {
        let frag
        let keys

        options = Object.assign({}, defaultOptions, options)
        // options = {
        //   ...defaultOptions,
        //   ...options
        // }
        keys = Object.keys(options)

        options.close = 'close'
        // console.log(makeTemplate(component, options))
        let factory = new FragmentFactory(this, makeTemplate(component, options, hyphenate))

        let scope = Object.create({})

        scope.close = function onClose() {
          frag.remove()
          scope = null
          frag = null
          factory = null
          resolve()
        }

        keys.forEach((key) => {
          if (key !== 'close') {
            scope[key] = options[key]
          }
        })

        frag = factory.create(this._host, scope, this._frag)

        frag.before(this.$el || document.body.lastChild)
      })
    }
  }
}
