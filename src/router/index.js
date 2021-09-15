import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/services',
    redirect: '/services/mobile-banking',
    component: () => import(/* webpackChunkName: "services" */ '../views/services/Services.vue'),
    children: [
      { path: 'mobile-banking', name: 'Mobile Banking', component: () => import(/* webpackChunkName: "mobile" */ '../views/services/Mobile.vue') },
      { path: 'atm-card-service', name: 'ATM Card Service', component: () => import(/* webpackChunkName: "atm" */ '../views/services/ATM.vue') },
      { path: 'sms-banking', name: 'SMS Banking', component: () => import(/* webpackChunkName: "sms" */ '../views/services/SMS.vue') },
      { path: 'remittance', name: 'Remittance', component: () => import(/* webpackChunkName: "remittance" */ '../views/services/Remittance.vue') }
    ]
  },
  { path: '/reports', name: 'Reports', component: () => import(/* webpackChunkName: "reports" */ '../views/Reports.vue') },
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  { path: '/notice', name: 'Notice', component: () => import(/* webpackChunkName: "notice" */ '../views/Notice.vue') },
  { path: '/news', name: 'News', component: () => import(/* webpackChunkName: "news" */ '../views/News.vue') },
  { path: '/gallery', name: 'Gallery', component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue') },
  { path: '/download', name: 'Download', component: () => import(/* webpackChunkName: "download" */ '../views/Download.vue') },
  { path: '/contact', name: 'Contact', component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue') },
]

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
