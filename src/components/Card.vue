<template>
  <div class="quick__card py-3 px-4">
    <div style="font-weight: 400; opacity: .75;" class="mb-6 mt-2">{{ title }}</div>
    <div class="d-flex flex-column mb-4" style="grid-gap: 16px;">
      <div v-for="(item, i) in title === 'Links' ? links : title === 'News' ? news : services" :key="i" class="d-flex" style="grid-gap: 10px; cursor: pointer;" @click="goto(item.to)">
        <v-icon v-text="'mdi-check'" color="white" class="pa-1 primary" style="border-radius: 50%; height: 20px; width: 20px; font-size: 14px !important;" />  
        <span style="font-size: 0.82rem; color: #232323; font-weight: 400 !important;">{{ item.title }}</span>
      </div>  
    </div>
  </div>  
</template>

<script>
export default {
  props: { title: String },
  data: () => ({
    links: [
      { title: 'About Sahkari', to: '/about/sahkari' },
      { title: 'Board of Directors', to: '' },
      { title: 'Management Team', to: '/about/management-teams' },
      { title: 'Business Hours', to: '/about/business-hours' }  
    ],
    services: [
      { title: 'Mobile Banking', to: '/services/mobile-banking' },
      { title: 'ATM Services', to: '/services/atm-card-service' },
      { title: 'SMS Banking Services', to: '/services/sms-banking' },
      { title: 'Remittance Services', to: '/services/remittance-services' },
      { title: 'Other', to: '/services/other' }  
    ],
    news: [
      { title: '20th Anniversary', to: '' },
      { title: 'Press Release', to: '' },
      { title: 'Kumari Calendar', to: '' },
      { title: 'Regular Active Members Honors Program', to: '' },
      { title: 'Staff of the Month Award', to: '' },
      { title: ' Member’s Treatment Co-Operation Fund', to: '' },
      { title: 'Holi 2077', to: '' },
      { title: 'कुमारी सेभिङ्गको सेवा दिउँसो ३ बजेसम्म', to: '' },
      { title:'18th Agm Notice', to: '' }
    ]
  }),
  methods: {
    goto(to) {
      if(this.$route.path !== to) this.$router.push(to)  
    }  
  }
}
</script>