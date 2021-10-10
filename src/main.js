import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import VueFirestore from 'vue-firestore'
require('firebase/firestore')
Vue.use(VueFirestore)


import Card from './components/Card'
Vue.component('Card', Card)

Vue.mixin({
  data: () => ({
    menus: [
      { title: 'गृहपृष्ठ', icon: 'mdi-home', to: '/' },
      {
        title: 'हाम्रो बारेमा',
        icon: 'mdi-account',
        to: '/about',
        children: [
          { title: 'संस्थाको बारेमा', to: '/sahkari' },
          { title: 'लक्ष्य र धयय', to: '/mission-vision' },
          { title: 'संचालक समिति', to: '/board-members' },
          // { title: 'Management Teams', to: '/management-teams' },
        ]
      },
      {
        title: 'हाम्रो सेवाहरु',
        icon: 'mdi-cog',
        to: '/services',
        children: [
          { title: 'बचत सेवा', to: '/saving-scheme' },
          { title: 'ऋण सेवा', to: '/loan-scheme' },
          { title: 'प्रविधिगत सेवाहरु', to: '' },
          { title: 'अन्य', to: '/other' }
        ]
      },
      {
        title: 'सन्देशहरु',
        icon: 'mdi-message',
        to: '/messages',
        children: [
          { title: 'प्रमुख कार्यकारी अधिकृतको प्रतिवद्धता', to: '/chairmans-message' },
          { title: 'अध्यक्षको सन्देश', to: '/managers-message' },
        ]
      },
      { title: 'समाचार', icon: 'mdi-post-outline', to: '/news' },
      { title: 'ग्यालरी', icon: 'mdi-image-multiple', to: '/gallery' },
      { title: 'डाउनलोड', icon: 'mdi-download', to: '/downloads' },
      { title: 'सूचना', icon: 'mdi-post', to: '/notice' },
      { title: 'अवसरहरु', icon: 'mdi-handshake', to: '/career' },
      { title: 'प्रतिवेदनहरु', icon: '', to: '/reports' },
      { title: 'सम्पर्क', icon: 'mdi-account-box', to: '/contact' }
    ]
  })
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')