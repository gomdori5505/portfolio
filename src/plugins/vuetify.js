import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VelogIcon from '@/components/VelogIcon.vue'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    values: {
      custom: { // name of our custom icon
        component: VelogIcon, // our custom component
      },
    },
  },
});
