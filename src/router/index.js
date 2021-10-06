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
      { path: 'mission-vision', name: 'MiSion Vision', component: () => import(/* webpackChunkName: "mission-vision" */ '../views/about/MissionVision.vue') },
      { path: 'board-members', name: 'Board Members', component: () => import(/* webpackChunkName: "board members"*/ '../views/about/BoardMembers.vue') },
      { path: 'management-teams', name: 'Management Teams', component: () => import(/* webpackChunkName: "managementteams" */ '../views/about/ManagementTeams.vue') },
    ] 
  },
  { 
    path: '/messages', 
    name: 'Messages', 
    component: () => import(/* webpackChunkName: "messages" */ '../views/message/Messages.vue'),
    redirect: '/messages/chairmans-message',
    children: [
      { path: 'chairmans-message', name: 'Chairman\'s Message', component: () => import(/* webpackChunkName: "chairmanmessage" */ '../views/message/ChairmanMessage.vue') },
      { path: 'managers-message', name: 'Manager\'s Message', component: () => import(/* webpackChunkName: "managersmessage" */ '../views/message/ManagerMessage.vue') },
    ] 
  },
  {
    path: '/services',
    redirect: '/services/mobile-banking',
    component: () => import(/* webpackChunkName: "services" */ '../views/services/Services.vue'),
    children: [
      { path: 'saving-scheme', name: 'Saving Scheme', component: () => import(/* webpackChunkName: "saving" */ '../views/services/Saving.vue') },
      { path: 'loan-scheme', name: 'Loan Scheme', component: () => import(/* webpackChunkName: "loan" */ '../views/services/Loan.vue') },
      { path: 'other', name: 'Other', component: () => import(/* webpackChunkName: "other" */ '../views/services/Other.vue') }
    ]
  },
  { path: '/reports', name: 'Reports', component: () => import(/* webpackChunkName: "reports" */ '../views/Reports.vue') },
  { path: '/notice', name: 'Notice', component: () => import(/* webpackChunkName: "notice" */ '../views/Notice.vue') },
  { path: '/news', name: 'News', component: () => import(/* webpackChunkName: "news" */ '../views/News.vue') },
  { path: '/gallery', name: 'Gallery', component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue') },
  { path: '/downloads', name: 'Downloads', component: () => import(/* webpackChunkName: "download" */ '../views/Download.vue') },
  { path: '/career', name: 'Career', component: () => import(/* webpackChunkName: "career" */ '../views/Career.vue') },
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
