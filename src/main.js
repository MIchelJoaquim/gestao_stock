import Vue from 'vue'
import App from './App.vue'
import router from "./router/router.ts";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

require('./components/components.ts')

let axios = require('axios');
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
