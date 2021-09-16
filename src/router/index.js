import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { 
    path: '/about', 
    name: 'About', 
    component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue'),
    redirect: '/about/sahkari',
    children: [
      { path: 'sahkari', name: 'Sahkari', component: () => import(/* webpackChunkName: "sahkari" */ '../views/about/Sahkari.vue') },
      { path: 'membership', name: 'Membership', component: () => import(/* webpackChunkName: "membership" */ '../views/about/Membership.vue') },
      { path: 'mission-vision', name: 'MiSion Vision', component: () => import(/* webpackChunkName: "mission-vision" */ '../views/about/MissionVision.vue') },
      { path: 'organizational-structure', name: 'Organizational Structure', component: () => import(/* webpackChunkName: "organizational-structure" */ '../views/about/OrganizationalStructure.vue') },
      { path: 'chairmans-message', name: 'Chairman\'s Message', component: () => import(/* webpackChunkName: "chairmanmessage" */ '../views/about/ChairmanMessage.vue') },
      { path: 'managers-message', name: 'Manager\'s Message', component: () => import(/* webpackChunkName: "managersmessage" */ '../views/about/ManagerMessage.vue') },
      { path: 'management-teams', name: 'Management Teams', component: () => import(/* webpackChunkName: "managementteams" */ '../views/about/ManagementTeams.vue') },
      { path: 'department', name: 'Department', component: () => import(/* webpackChunkName: "department" */ '../views/about/Department.vue') },
      { path: 'branch-msc', name: 'Branch(M.S.C.)', component: () => import(/* webpackChunkName: "branch" */ '../views/about/Branch.vue') },
      { path: 'business-hours', name: 'Business Hours', component: () => import(/* webpackChunkName: "business hours" */ '../views/about/BusinessHour.vue') },
      { path: '/principle-of-credit-union-operating', name: 'Principle of Credit Union Operating', component: () => import('../views/about/PCUO.vue') },
      { path: '/principle-of-co-operation', name: 'Principle of Co-Operation', component: () => import('../views/about/PCO.vue') },
      { path: '/our-core-values', name: 'Our Core Values', component: () => import('../views/about/CoreValues.vue') },
      { path: '/our-culture', name: 'Our Culture', component: () => import('../views/about/Culture.vue') },
      { path: '/faq', name: 'FAQ\'s', component: () => import('../views/about/FAQ.vue') }
    ] 
  },
  {
    path: '/services',
    redirect: '/services/mobile-banking',
    component: () => import(/* webpackChunkName: "services" */ '../views/services/Services.vue'),
    children: [
      { path: 'mobile-banking', name: 'Mobile Banking', component: () => import(/* webpackChunkName: "mobile" */ '../views/services/Mobile.vue') },
      { path: 'atm-card-service', name: 'ATM Card Services', component: () => import(/* webpackChunkName: "atm" */ '../views/services/ATM.vue') },
      { path: 'sms-banking', name: 'SMS Banking Services', component: () => import(/* webpackChunkName: "sms" */ '../views/services/SMS.vue') },
      { path: 'remittance-services', name: 'Remittance Services', component: () => import(/* webpackChunkName: "remittance" */ '../views/services/Remittance.vue') },
      { path: 'other', name: 'Other', component: () => import(/* webpackChunkName: "other" */ '../views/services/Other.vue') }
    ]
  },
  { path: '/reports', name: 'Reports', component: () => import(/* webpackChunkName: "reports" */ '../views/Reports.vue') },
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
