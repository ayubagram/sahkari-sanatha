<template>
  <v-container class="management__teams">
    <div v-for="(team, t) in teams" :key="t" class="team__member">
      <div class="team__member__img">
        <img :src="team" alt="Team Member Name">
      </div>
      <div class="team__member__info">
        <div class="download__title" style="margin-bottom: 0px !important;">Employee Name</div>
        <p>Employee Position</p>
      </div>
    </div>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    teams: [
      'https://jnpbazaar.com/wp-content/uploads/2017/02/2-1.jpg',
      'https://suchanaguru.com/wp-content/uploads/2020/02/download-4.jpg',
      'https://study.com/cimages/multimages/16/108f7836-501a-449e-8422-2185b49908cc_branch_manager_1.jpg',
      'https://blog.marketfinance.com/wp-content/uploads/2014/12/BJC_MarketInvoice05997.jpg',
      'https://st3.depositphotos.com/1961865/34706/i/450/depositphotos_347067398-stock-photo-bank-manager-offers-credit-card.jpg',
      'https://media.istockphoto.com/photos/head-shot-portrait-of-confident-businesswoman-at-workplace-picture-id1073416040?k=20&m=1073416040&s=612x612&w=0&h=2o6Gzi03bLFbO5JxkV-tQ3d9EorU-kjV76-7gswmwAc=',
      'https://thumbs.dreamstime.com/b/portrait-smart-old-manager-tablet-portrait-smart-old-manager-tablet-company-header-business-suit-gadget-113566227.jpg',
    ]
  })
}
</script>