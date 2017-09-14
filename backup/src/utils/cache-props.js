import deepcopy from 'deepcopy'
export default {
  methods: {
    cacheProps(cacheKey) {
      let cache = {}
      let keys
      let props = this.$options.props

      if (cacheKey) {
        cache[cacheKey] = deepcopy(this[cacheKey])
      } else {
        if (props) keys = []
        else if (Array.isArray(props)) keys = props
        else keys = Object.keys(props)
        // keys = !props ? [] : Array.isArray(props) ? props : Object.keys(props)
        keys.forEach(prop => {
          cache[prop] = deepcopy(this[prop])
        })
      }

      return (fallBackKey) => {
        let key = fallBackKey || cacheKey
        if (key) {
          this[key] = deepcopy(cache[key])
        } else {
          cache.forEach(prop => {
            this[prop] = deepcopy(cache[prop])
          })
        }
      }
    }
  }
}
