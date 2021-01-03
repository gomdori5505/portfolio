import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import vueTypingAnimation from "./typing.animation.module"
import { library } from '@fortawesome/fontawesome-svg-core'

import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss3, faBootstrap, faSass, faJs, faVuejs, faPhp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faHtml5, faCss3, faBootstrap, faSass, faJs, faVuejs, faPhp, faDatabase )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(vueTypingAnimation)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
