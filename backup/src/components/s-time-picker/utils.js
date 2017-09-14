const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// 判断是否是闰年
export function isLeapYear(year) {
  return typeof year === 'number' && (year % 100 === 0 ? year % 400 === 0 : year % 4 ===0)
}

let testFullDate
let testFullSec = 0
// 判断小于某天
const isLessThen = function(year, month, date, minDate) {
  if (minDate === -1) return false
  testFullDate = new Date(year, month, date, minDate)
  testFullSec = testFullDate.getTime() // 获取时间的总秒数
  return testFullSec <= minDate
}
// 判断大于某天
const isLargerThen = function(year, month, date, maxDate) {
  if (maxDate === -1) return false
  testFullDate = new Date(year, month, date, 0, 0, 0)
  testFullSec = testFullDate.getTime()
  return testFullSec >= maxDate
}

export function getNormalDateArray (year, month, today, { maxDate, minDate, valueDate }){
  let todayYear = today.getFullYear()
  let todayMonth = today.getMonth()
  let todayDate = today.getDate()

  let length = MONTH_DAYS[month]

  if (length === 28) {
    length = isLeapYear(year) ? 29 : 28
  }

  let arr = []
  for (let i = 0; i < length; i++) {
    arr.push({
      year, month,
      isThisMonth: true,
      selected: valueDate &&
                year === valueDate.year &&
                month === valueDate.month &&
                i + 1 === valueDate.date,
      day: i + 1,
      disabled: isLessThen(year, month, i + 1, minDate) || isLargerThen(year, month, i + 1, maxDate),
      isToday: todayYear === year && todayMonth === month && i + 1 === todayDate
    })
  }
  return arr
}

export function getFirstDateArrayLength(diffrrence) {
  return diffrrence === 0 ? 7 : diffrrence < 0 ? 0 - diffrrence : 7 - diffrrence
}
