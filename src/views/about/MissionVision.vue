<template>
  <v-container class="download mission">
    <div class="download__links">
      <div class="download__title">Vision</div>
      <span>To become a leading Co-Operative in Nepal, our planning and guidance is sound, safe, secured and sustainable of Co-Operative, finest and quality financial and non-financial services for our members and community.</span>
      <div class="download__title mt-6">Mission</div>
      <span>To enhance and upliftment of qualitative livelihood with members economic, social and cultural development through microfinance and other financial and non-financial services.</span>
      <div class="download__title mt-6">Objectives</div>
      <span>For the member, by the member to the member</span>
      <ul class="mt-5 d-flex flex-column" style="grid-gap: 4px;">
        <li v-for="(item, i) in items" :key="i">{{ item }}</li>
      </ul>
    </div>
    <div class="cards__with__links">
      <Card title="Links" />
      <Card title="Services" />
      <Card title="News" />  
    </div>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    items: [
      'To provide Smart, Safe and secured Co-Operative banking services to the member.',
      'To encourage the saving habit for future prosperity.',
      'To help the member who are affected by the natural disaster and other.',
      'To emphasis the economic, social and cultural development for the member.',
      'To provide Co-Operative education, financial literacy for member through education, training, workshop, seminar etc.',
      'To provide saving & credit facilities for members with the simple procedure.',
      'To assure SMART service for member.',
      'To give skill development training for member.',
      'To provide members security program, one for all and all for one (health and disaster).',
      'To promote decrease the environment population and avoid for smoking, alcohol, drug and junk food for improve health and saving habits of community.',
      'To run the activities for eliminating the poverty in community by saving habit and microfinance group and other financial with essential service and facilities.',
      'To encourage the member participation for social work and awareness program.',
      'To provide financial support for member’s (operation) treatment of non-communicable diseases like heart, kidney, liver, cancer etc.'
    ]
  })
}
</script>