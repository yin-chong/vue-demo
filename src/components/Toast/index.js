import Vue from 'vue'
import Toast from './Toast'
const ToastContructor = Vue.extend(Toast)
export default function toast (options) {
  // 1. 实例化
  const instance = new ToastContructor({
    data: options
  })
  // 2. 手动挂载
  // this.$mount(instance);
  instance.$mount()
  // 手动挂载到body
  document.body.appendChild(instance.$el)

  return instance
}
