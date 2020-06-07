import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ButtonLink from '@/components/ButtonLink.vue'
import Modal from '@/components/Modal.vue'
import "../style/bootstrap.min.css"
import "../style/global.css"


Vue.component('ButtonLink', ButtonLink)
Vue.component('Modal', Modal)
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
