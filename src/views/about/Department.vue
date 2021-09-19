<template>
  <v-container class="download department">
    <div class="download__links">
      <div class="mb-8 mb-sm-10 mb-md-12 mb-lg-14 d-flex flex-column" style="grid-gap: 12px;">
        <div v-for="(item, i) in items" :key="i">
          <div class="download__title">{{ item }}</div>
          <v-divider />
        </div>
      </div>
      <div class="download__title">Department Head</div>
      <table class="mt-4">
        <thead class="primary">
          <tr>
            <th style="width: 50px !important; padding: 0 !important;">S.N.</th>
            <th>Name</th>
            <th>Department Head</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in 10" :key="a">
            <td>{{ a }}.</td>
            <td>Incharge Name</td>
            <td>Department which he/she is head of.</td>
          </tr>
        </tbody>
      </table>
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
      'Operation & Member Service Department',
      'Admin & H.R. Department',
      'Loan Department',
      'Loan Recovery Department',
      'Account Department',
      'Marketting, Business Promotion & Social Service Department',
      'Social work & Non-Financial Department',
      'IT Department',
      'Conflict Management Department'
    ]
  })
}
</script>

<style>
.department table {
  table-layout: auto !important;
}
</style>