// 防抖函数
export const debounce = (fnName, time = 1000) => {
  let timeout
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    fnName.call()
  }, time)
}

// 节流
export const throttle = (fnName, time = 1000) => {
  let valid = true // 设置开关
  if (!valid) {
    return void 666
  }
  valid = false
  setTimeout(() => {
    fnName.call()
  }, time)
}
