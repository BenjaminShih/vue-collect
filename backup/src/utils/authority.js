// function invoke(obj, key) {
//   let keys = key.split('.')
//   let value = obj
//   for (let i = 0; i < keys.length; i++) {
//     if (!value) return null
//     value = value[keys[i]]
//   }
//   return value
// }

export function exist(key) {
  return function doExist(account) {
    return !!account[key]
  }
}

export function notEquals(key, value) {
  return function doRight(account) {
    return account[key] !== value
  }
}

export function equals(key, value) {
  return function doWrong(account) {
    return account[key] === value
  }
}

export function not(condition) {
  return function doNot(account) {
    return typeof condition === 'function' ? !condition[account] : !condition
  }
}

export function and(condition) { // array
  return function doAnd(account) {
    let flag = true
    let result
    for (let i = 0; i < condition.length; i++) {
      result = typeof condition[i] === 'function' ?
        condition[i](account) : !!condition[i]
      flag = flag && result
      if (!flag) return flag
    }
    return flag
  }
}

export function or(condition) { // array
  return function doOr(account) {
    let flag = false
    let result
    for (let i = 0; i < condition.length; i++) {
      result = typeof condition[i] === 'function' ?
        condition[i](account) : !!condition[i]
      flag = flag || result
      if (flag) return flag
    }
    return flag
  }
}

export default {
  exist, and, or, notEquals, equals, not
}
