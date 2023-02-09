import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './public/style/index.css'


// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);




// 引入剪切板
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
