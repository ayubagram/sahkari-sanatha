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
      { title: 'Home', icon: 'mdi-home', to: '/' },
      {
        title: 'About Us',
        icon: 'mdi-account',
        to: '/about',
        children: [
          { title: 'About Sahkari', to: '/sahkari' },
          { title: 'Mission, Vision & Objectives', to: '/mission-vision' },
          { title: 'Board Members', to: '/board-members' },
          { title: 'Management Teams', to: '/management-teams' },
        ]
      },
      {
        title: 'Services',
        icon: 'mdi-cog',
        to: '/services',
        children: [
          { title: 'Savings Schemes', to: '/saving-scheme' },
          { title: 'Loan Schemes', to: '/loan-scheme' },
          { title: 'Other', to: '/other' }
        ]
      },
      {
        title: 'Messages',
        icon: 'mdi-message',
        to: '/messages',
        children: [
          { title: 'Chariman\'s Message', to: '/chairmans-message' },
          { title: 'Manager\'s Message', to: '/managers-message' },
        ]
      },
      { title: 'News', icon: 'mdi-post-outline', to: '/news' },
      { title: 'Gallery', icon: 'mdi-image-multiple', to: '/gallery' },
      { title: 'Downloads', icon: 'mdi-download', to: '/downloads' },
      { title: 'Notice', icon: 'mdi-post', to: '/notice' },
      // { title: 'Career', icon: 'mdi-handshake', to: '/career' },
      { title: 'Contact', icon: 'mdi-account-box', to: '/contact' }
    ]
  })
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
