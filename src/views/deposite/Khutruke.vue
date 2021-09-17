<template>
  <v-container>
    <div class="download__links">
      <div class="mb-3">
        <img src="http://kumarisaving.com.np/images/khutruke_1594103751.jpg" alt="Khutkure Saving">
      </div>
      <p>This A/c is specially designed to building a habit of savings to small kids and house wives by collect and control the unnecessarily expenditures at home, this program have been conducted in the following way:</p> <br>
      <ul>
        <li v-for="(item, i) in items" :key="i">{{ item }}</li>
      </ul>
    </div>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    items: [
      'This A/c is a time deposit scheme where you can choose 6 months up to 3 years schemes.',
      'The Co-operative provides a Khutruke (piggy bank) to the member after opening an A/c in this program.',
      'Once in a month, there must be a deposit entry to the account book of the depositor. The saved amount can be collected by the marketing staff and member self of the Kumari Saving.',
      'From home in the presence of the depositor and that money is transferred to the account book of the depositor.',
      'Interest will be added on quarterly basis.',
      'The saved amount plus interest can be withdrawn after time maturity.'
    ]
  })
}
</script>