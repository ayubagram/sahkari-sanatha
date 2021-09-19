<template>
  <v-container class="download">
    <div class="download__links">
      <table>
        <thead>
          <tr class="primary">
            <th>S.N.</th>
            <th>Description</th>
            <th>Time</th>
            <th>Percentage%</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in 5" :key="a">
            <td>{{ a }}.</td>
            <td>Periodic (Fixed) Deposit against Loan</td>
            <td></td>
            <td>+3.00%</td>
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

<style scoped>
table { table-layout: auto !important; }
</style>