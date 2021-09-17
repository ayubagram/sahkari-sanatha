<template>
  <v-app-bar color="primary" dark :app="fixed" elevate-on-scroll height="50">
    <v-container class="px-0 px-lg-3">
      <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)" class="d-block d-sm-block d-md-block d-lg-none" /> 
      <div class="navs d-none d-sm-none d-md-none d-lg-block">
        <v-menu offset-y v-for="(nav, n) in navs" :key="n" open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn height="50" tile text :to="nav.to" v-bind="attrs" v-on="on">
              <span v-text="nav.title" />
              <v-icon v-if="nav.children" v-text="'mdi-menu-down'" />
            </v-btn>
          </template>
          <v-list v-if="nav.children" class="pa-0" dense expand>
            <v-list-item v-for="(item, index) in nav.children" :key="index" :to="`${nav.to}${item.to}`">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>  
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    fixed: false,
    navs: [
      { title: 'Home', to: '/' },
      {
        title: 'About Us',
        to: '/about',
        children: [
          { title: 'About Sahkari', to: '/sahkari' },
          { title: 'Membership', to: '/membership' },
          { title: 'Mission, Vision & Objectives', to: '/mission-vision' },
          { title: 'Organizational Structure', to: '/organizational-structure' },
          { title: 'Chariman\'s Message', to: '/chairmans-message' },
          { title: 'Manager\'s Message', to: '/managers-message' },
          { title: 'Management Teams', to: '/management-teams' },
          { title: 'Department', to: '/department' },
          { title: 'Branch (M.S.C)', to: '/branch-msc' },
          { title: 'Business Hour', to: '/business-hours' },
          { title: 'Principles of Credi Union Operating', to: '/principle-of-credit-union-operating' },
          { title: 'Principles of Co-Operation', to: '/principle-of-co-operation' },
          { title: 'Our Core Values', to: '/our-core-values' },
          { title: 'Our Culture', to: '/our-culture' },
          { title: 'FAQ\'s', to: '/faq' }
        ]
      },
      {
        title: 'Deposite Scheme',
        to: '/deposite',
        children: [
          { title: 'Savings Schemes', to: '/saving-schemes' },
          { title: 'Periodic(Fixed) Deposite Schemes', to: '/periodic-fixed-deposit-schemes' },
          { title: 'Reccuring(Regular) Deposite Schemes', to: '/recurring-regular-deposit-savings' },
          { title: 'Members Cumpulsion Savings', to: '/members-compulsion-savings' },
          { title: 'Kumari 365 Days Ragular Saving', to: '/member-regular-saving' },
          { title: 'Travel Saving', to: '/travel-saving' },
          { title: 'Farmers Saving', to: '/farmers-saving' },
          { title: 'Labour Saving', to: '/labour-saving' },
          { title: 'Micro Finance Group Saving', to: '/micro-finance-group-saving' },
          { title: 'Members Life Secured Saving', to: '/life-secured-saving' },
          { title: 'Khutruke Saving', to: '/khutruke-saving' },
          { title: 'Health Treatement Saving', to: '/health-treatment-saving' },
          { title: 'Self Employment Saving', to: '/self-employment-saving' },
          { title: 'Youth & Child Saving', to: '/youth-child-saving' },
          { title: 'Festival Expenses Saving', to: '/festival-expenses-saving' }
        ]
      },
      {
        title: 'Loan Scheme',
        to: '/loan',
        children: [
          { title: 'Agriculture & Farming Loan', to: '' },
          { title: 'Business Loan', to: '/business-loan' },
          { title: 'Health Treatement Loan', to: '/business-loan' },
          { title: 'Cottage & Small Industries Business Promotion Load', to: '/business-loan' },
          { title: 'Real Estate Loan', to: '/real-estate-loan' },
          { title: 'Home Loan', to: '/home-loan' },
          { title: 'Education Loan', to: '/education-loan' },
          { title: 'Hire Purchase Loan', to: '/real-estate-loan' },
          { title: 'Women Entrepreneur Loan', to: '/real-estate-loan' },
          { title: 'Youth Entrepreneur Loan', to: '/real-estate-loan' },
          { title: 'Life of Credit Loan', to: '/real-estate-loan' },
          { title: 'Periodic(Fixed) Deposite against Loan', to: '/real-estate-loan' },
          { title: 'Microfinance Loan', to: '/microfinance-loan' },
          { title: 'Trading Loan', to: '/trading-loan' },
          { title: 'Other Loan', to: '/trading-loan' },
        ]
      },
      {
        title: 'Services',
        to: '/services',
        children: [
          { title: 'Mobile Banking', to: '/mobile-banking' },
          { title: 'ATM Services', to: '/atm-card-service' },
          { title: 'SMS Banking Services', to: '/sms-banking' },
          { title: 'Remittance Services', to: '/remittance-services' },
          { title: 'Other', to: '/other' }
        ]
      },
      { title: 'Reports', to: '/reports' },
      { title: 'Notice', to: '/notice' },
      { title: 'News', to: '/news' },
      { title: 'Gallery', to: '/gallery' },
      { title: 'Download', to: '/download' },
      { title: 'Contact', to: '/contact' }
    ]
  }),
  methods: {
    goto() {
      if(this.$route.path !== '/') this.$router.push('/')
    },
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
  },
  computed: {
    ...mapState(['drawer']),
  },
  created() {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 250) this.fixed = true
      else this.fixed = false
    })
  }
}
</script>

<style>
.v-list--dense .v-list-item .v-list-item__title {
  font-weight: 400 !important;
  letter-spacing: .5px !important;
  font-size: 12px !important;
}
</style>