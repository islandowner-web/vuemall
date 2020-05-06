import Toast from './Toast.vue'

const obj = {}

obj.install = function (Vue) {

  // document.body.appendChild(Toast.$el)
  // Vue.prototype.$toast = Toast;

  // 创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 创建组件对象 
  const toast = new toastContrustor()

  // 将组件对象挂载到元素上
  toast.$mount(document.createElement('div'))

  // toast.$el对应的div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
  
}

export default obj