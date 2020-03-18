import Button from './button/button.vue'
import 'semantic-ui-css/semantic.css'
export default {
  install (Vue) {
    Vue.component('MyButton', Button)
  }
}
