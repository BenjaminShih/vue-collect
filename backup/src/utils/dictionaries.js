import {
  fetchDictionary
} from 'store/actions/common/dictionaries-action'

export default function getDictionary(key, format) {
  return function dictionaryComputed() {
    let store = this.$store
    let arr

    if (!store.state.dictionaries[key]) {
      // fire action
      fetchDictionary.call(this, store, key)
    }

    arr = store.state.dictionaries[key] || []

    if (format !== false) {
      return arr.map(option => {
        return {
          label: option.value,
          value: option.key
        }
      })
    }

    return arr
  }
}
