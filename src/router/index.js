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
      { path: 'principle-of-credit-union-operating', name: 'Principle of Credit Union Operating', component: () => import('../views/about/PCUO.vue') },
      { path: 'principle-of-co-operation', name: 'Principle of Co-Operation', component: () => import('../views/about/PCO.vue') },
      { path: 'our-core-values', name: 'Our Core Values', component: () => import('../views/about/CoreValues.vue') },
      { path: 'our-culture', name: 'Our Culture', component: () => import('../views/about/Culture.vue') },
      { path: 'faq', name: 'FAQ\'s', component: () => import('../views/about/FAQ.vue') }
    ] 
  },
  {
    path: '/deposite',
    redirect: '/deposite/savings-schemes',
    component: () => import(/* webpackChunkName: "deposite" */ '../views/deposite/Deposite.vue'),
    children: [
      { path: 'saving-schemes', name: 'Saving Schemes', component: () => import(/* webpackChunkName: "services" */ '../views/deposite/Saving.vue'), },
      { path: 'periodic-fixed-deposit-schemes', name: 'Periodic (Fixed) Deposite Scheme', component: () => import('../views/deposite/FixedDeposite.vue') },
      { path: 'recurring-regular-deposit-savings', name: 'Recurring (Regular Deposit) Schemes', component: () => import('../views/deposite/RecurringDeposite.vue') },
      { path: 'members-compulsion-savings', name: 'Members Compulsion Savings', component: () => import('../views/deposite/MemberCompulsion.vue') },
      { path: 'member-regular-saving', name: 'Kumari 365 Days Ragular Saving', component: () => import('../views/deposite/MemberRegular.vue') },
      { path: 'travel-saving', name: 'Travel Saving', component: () => import('../views/deposite/Travel.vue') },
      { path: 'farmers-saving', name: 'Farmers Saving', component: () => import('../views/deposite/Farmers.vue') },
      { path: 'labour-saving', name: 'Labour Saving', component: () => import('../views/deposite/Labour.vue') },
      { path: 'micro-finance-group-saving', name: 'Micro Group Finance Saving', component: () => import('../views/deposite/MicroGroup.vue') },
      { path: 'life-secured-saving', name: 'Life Secured Saving', component: () => import('../views/deposite/LifeSecured.vue') },
      { path: 'khutruke-saving', name: 'Khutruke Saving', component: () => import('../views/deposite/Khutruke.vue') },
      { path: 'health-treatment-saving', name: 'Health Treatement Saving', component: () => import('../views/deposite/Health.vue') },
      { path: 'self-employment-saving', name: 'Self Employement Saving', component: () => import('../views/deposite/SelfEmployment.vue') },
      { path: 'youth-child-saving', name: 'Youth & Child Saving', component: () => import('../views/deposite/YouthChild.vue') },
      { path: 'festival-expenses-saving', name: 'Festival Expenses Saving', component: () => import('../views/deposite/Festival.vue') }
    ]
  },
  {
    path: '/loan',
    redirect: '/deposite/agriculture-farming-loan',
    component: () => import(/* webpackChunkName: "deposite" */ '../views/loan/Loan.vue'),
    children: [
      { path: 'agriculture-farming-loan', name: 'Agriculture &  Farmin And Loan', component: () => import('../views/loan/Agriculture.vue') },
      { path: 'business-loan', name: 'Business Loan', component: () => import('../views/loan/Business.vue') },
      { path: 'medical-loan', name: 'Medical Loan', component: () => import('../views/loan/Medical.vue') },
      { path: 'small-business-promotion-loan', name: 'Small Business Promotion Loan', component: () => import('../views/loan/SmallBusiness.vue') },
      { path: 'real-estate-loan', name: 'Real Estate Loan', component: () => import('../views/loan/RealEstate.vue') },
      { path: 'home-loan', name: 'Home Loan', component: () => import('../views/loan/Home.vue') },
      { path: 'education-loan', name: 'Education Loan', component: () => import('../views/loan/Education.vue') },
      { path: 'hire-purchase-loan', name: 'Hire Purchase Loan', component: () => import('../views/loan/HirePurchase.vue') },
      { path: 'women-entrepreneur-loan', name: 'Women Entrepreneur Loan', component: () => import('../views/loan/WomenEntrepreneur.vue') },
      { path: 'youth-entrepreneur-loan', name: 'Youth Entrepreneur Loan', component: () => import('../views/loan/YouthEntrepreneur.vue') },
      { path: 'line-of-credit-loan', name: 'Line of Credit Loan', component: () => import('../views/loan/LineOfCredit.vue') },
      { path: 'periodic-fixed-deposit-against-loan', name: 'Perfiodic (Fixed) Deposite Against Loan', component: () => import('../views/loan/Periodic.vue') },
      { path: 'microfinance-loan', name: 'Microfinance Loan', component: () => import('../views/loan/MicroFinance.vue') },
      { path: 'trading-loan', name: 'Tading Loan', component: () => import('../views/loan/Trading.vue') },
      { path: 'foreign-employment-purpose-loan', name: 'Foreign Employment Purpose Loan', component: () => import('../views/loan/Foreign.vue') },
      { path: 'festival-loan', name: 'Festival Loan', component: () => import('../views/loan/Festival.vue') },
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
