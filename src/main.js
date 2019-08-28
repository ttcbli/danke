import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//加载axios
import axios from 'axios'
//加载头部
import header from './views/Header.vue'
//加载底部
import footer from './views/Footer.vue'
//加载轮播
import Carousel from './components/Carousel.vue'

//把axios添加到父级的原型对象
Vue.prototype.axios=axios;
Vue.prototype.Home="/api"
//把头部注册成组件
Vue.component("my-header",header);
//把头底部注册成组件
Vue.component("my-footer",footer);
Vue.component("carousel",Carousel);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
