<template>
  <v-container class="download">
    <div class="download__links">
      <p>Member who wants to build residential house or commercial house for residential or business purpose, renovation of house then they can take the home loan.</p> <br>
      <div class="download__title">Basic Eligibility Criteria</div>
      <ul>
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
      'Any Nepalese Individuals of at least 20 Years of age having stable, steady and reliable source of income from job, business, rent, pension, foreign employment (remittance), supported by the document',
      'Age of the applicant and the loan tenure collectively should not exceed sixty-five years',
      'Must be able to provide unencumbered fixed assets collateral as primary security. The proposed site should have accessible road of at least 8 feet width.',
      'Self-employed professionals having reliable/stable source of income or income of own family supported by the documentary evidence.',
      'Any other family members or individuals having identifiable source of income supported by the documentary evidence of the same.',
      'Employees of corporate entities supported by salary slips and employer\'s undertaking that salary will be routed through the company or institution.',
      'Borrowers\' uncommitted income should be 25% more than the Equated Monthly Installment (EMI).',
      'Nepalese Citizens only but should be above 20 years of age and last installment to be repaid within 65 years of his/ her service, unless steady and regular income justifies.',
      'For the corporate borrowers, company\'s past performance of 2 years and projection reports of 2 years, (including current year) its financials as well as the reputation of the promoters will be considered.'
    ]
  })
}
</script>