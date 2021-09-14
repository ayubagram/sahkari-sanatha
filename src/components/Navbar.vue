<template>
  <v-app-bar app color="primary" dark elevate-on-scroll height="50">
    <v-container class="d-flex justify-space-between px-0 px-lg-3">
      <div style="font-size: 35px; letter-spacing: 1px;" @click="goto">SS</div>
      <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)" class="d-block d-sm-block d-md-block d-lg-none" /> 
      <div class="navs d-none d-sm-none d-md-none d-lg-block">
        <v-menu offset-y v-for="(nav, n) in navs" :key="n" open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn height="50" tile text :to="nav.to" v-bind="attrs" v-on="on">{{ nav.title }}</v-btn>
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
    navs: [
      { title: 'Home', to: '/' },
      {
        title: 'About Us',
        to: '/about',
        children: [
          { title: 'About', to: '/about' },
          { title: 'Membership', to: '/membership' },
          { title: 'Department', to: '/department' },
          { title: 'Management Team', to: '/management-team' },
          { title: 'Business Hour', to: '/business-hour' },
          { title: 'Our Culture', to: '/our-culture' }
        ]
      },
      {
        title: 'Deposite Scheme',
        to: '/deposite',
        children: [
          { title: 'Saving Scheme', to: '/saving-scheme' },
          { title: 'Labour Saving', to: '/labour-saving' },
          { title: 'Travel Saving', to: '/travel-saving' },
        ]
      },
      {
        title: 'Loan Scheme',
        to: '/loan',
        children: [
          { title: 'Business Loan', to: '/business-loan' },
          { title: 'Home Loan', to: '/home-loan' },
          { title: 'Education Loan', to: '/education-loan' },
          { title: 'Real Estate Loan', to: '/real-estate-loan' },
          { title: 'Trading Loan', to: '/trading-loan' },
          { title: 'Microfinance Loan', to: '/microfinance-loan' }
        ]
      },
      {
        title: 'Services',
        to: '/services',
        children: [
          { title: 'Mobile Banking', to: '/mobile-banking' },
          { title: 'ATM Services', to: '/atm-card-service' },
          { title: 'SMS Banking', to: '/sms-banking' },
          { title: 'Remittance', to: '/remittance' },
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
}
</script>

<!--
<div class="navs">
      <v-btn v-for="(nav, n) in navs" height="50" :key="n" text tile :to="nav.to">{{ nav.title }}</v-btn>
      <v-menu offset-y v-for="(nav, n) in navs" :key="n" open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn height="50" tile text :to="nav.to" v-bind="attrs" v-on="on">{{ nav.title }}</v-btn>
        </template>
        <v-list v-if="nav.children" class="pa-0" dense expand>
          <v-list-item v-for="(item, index) in nav.children" :key="index" :to="`${nav.to}${item.to}`">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
-->