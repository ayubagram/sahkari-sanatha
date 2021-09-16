<template>
  <div class="quick__card py-3 px-4">
    <div style="font-weight: 400; opacity: .75;" class="mb-6 mt-2">{{ title }}</div>
    <div class="d-flex flex-column mb-4" style="grid-gap: 16px;">
      <div v-for="(item, i) in title === 'Links' ? links : services" :key="i" class="d-flex" style="grid-gap: 10px; cursor: pointer;" @click="goto(item.to)">
        <v-icon v-text="'mdi-check'" color="white" class="pa-1 primary" style="border-radius: 50%; height: 20px; width: 20px; font-size: 14px !important;" />  
        <p style="font-weight: 400 !important;">{{ item.title }}</p>
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
    ]
  }),
  methods: {
    goto(to) {
      if(this.$route.path !== to) this.$router.push(to)  
    }  
  }
}
</script>