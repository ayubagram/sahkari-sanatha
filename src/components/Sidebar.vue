<template>
  <v-navigation-drawer color='primary' dark disable-resize-watcher mobile-breakpoint="10024" v-model="drawer" width="230" app>

    <v-card height="100" tile elevation='0' class='primary d-flex justify-center align-center title'>
      <b><span class="secondary--text">SahKari Sanstha</span></b>
    </v-card>

    <v-divider></v-divider>

    <v-list expand nav tile dense>
      <v-list-item-group v-model="selectedItem">
        <div v-for="(item, i) in menu" :key="i">
          <v-list-group v-if="item.children" :value="false" :prepend-icon="item.icon">
            <template v-slot:activator>
              <v-list-item-title v-text="item.title" />
            </template>
            <v-list-item v-for="(child, c) in item.children" :key="c" :to="`${item.to}${child.title}`">
              <v-list-item-icon class="mx-2">
                <v-icon size='20' v-text="child.icon" />
              </v-list-item-icon>
              <v-list-item-title v-text="child.title" style="letter-spacing: 1px; font-weight: 400 !important; font-size: 16px !important;" />
            </v-list-item>
          </v-list-group>
          <v-list-item :to="item.to" v-else>
            <v-list-item-icon class="mx-2">
              <v-icon size='20' v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-title v-text="item.title" style="letter-spacing: 1px; font-weight: 400 !important; font-size: 16px !important;" />
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    menu: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      {
        title: 'About Us',
        icon: 'mdi-account',
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
        icon: 'mdi-finance',
        to: '/deposite',
        children: [
          { title: 'Saving Scheme', to: '/saving-scheme' },
          { title: 'Labour Saving', to: '/labour-saving' },
          { title: 'Travel Saving', to: '/travel-saving' },
        ]
      },
      {
        title: 'Loan Scheme',
        icon: 'mdi-cash',
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
        icon: 'mdi-cog',
        to: '/services',
        children: [
          { title: 'Mobile Banking', to: '/mobile-banking' },
          { title: 'ATM Services', to: '/atm' },
          { title: 'SMS Banking', to: '/sms-banking' },
          { title: 'Remittance', to: '/remittance' },
          { title: 'Other', to: '/other' }
        ]
      },
      { title: 'Reports', icon: 'mdi-poll', to: '/reports' },
      { title: 'Notice', icon: 'mdi-post', to: '/notice' },
      { title: 'News', icon: 'mdi-post-outline', to: '/news' },
      { title: 'Gallery', icon: 'mdi-image-multiple', to: '/gallery' },
      { title: 'Download', icon: 'mdi-download', to: '/download' },
      { title: 'Contact', icon: 'mdi-account-box', to: '/contact' }
    ]
  }),

  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('SET_DRAWER', val)
      },
    },      
  },
}
</script>

<style>
.v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 16px !important;
}
</style>