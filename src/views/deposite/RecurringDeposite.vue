<template>
  <v-container>
    <div class="download__links">
      <div class="download__title">Sahkari saving offers the following Recurring Saving:</div><br>
      <b class="mb-2">A. RECURRING (Regular Deposit) SAVINGS</b>
      <table>
        <thead>
          <tr class="primary">
            <th>Duration</th>
            <th>Monthly Interest Rate</th>  
          </tr>
        </thead>  
        <tbody>
          <tr v-for="a in 4" :key="a">
            <td>{{ i }} year</td>
            <td>5.00% (monthly basis)</td>
          </tr>  
        </tbody>
      </table>
      <br>
      
      <b class="mb-2">B. RECURRING (Child Education) SAVINGS</b>
      <table>
        <thead>
          <tr class="primary">
            <th>Duration</th>
            <th>Monthly Interest Rate</th>  
          </tr>
        </thead>  
        <tbody>
          <tr v-for="a in 4" :key="a">
            <td>{{ i }} year</td>
            <td>5.00% (monthly basis)</td>
          </tr>  
        </tbody>
      </table>
      <br>

      <b>C. KHUTRUKE SAVINGS</b>
      <p class="mb-2">This A/c can be open for minimum balance 100NPR for 1 to 3 years’ time deposit. Savings must be maintained on regular installment basis; have to fix an amount of deposit while in opening an A/c to daily or monthly collection.</p>
      <table>
        <thead>
          <tr class="primary">
            <th>Duration</th>
            <th>Monthly Interest Rate</th>  
          </tr>
        </thead>  
        <tbody>
          <tr v-for="a in 4" :key="a">
            <td>{{ i }} year</td>
            <td>5.00% (monthly basis)</td>
          </tr>  
        </tbody>
      </table>
      <br>

      <b class="mb-2">D. KUMARI “DHAN BRIDHHI” REGULAR SAVINGS</b>  
      <table>
        <thead>
          <tr class="primary">
            <th>Monthly (Fixed) Installment</th>
            <th>Deposited Amount (36 installments)</th>  
            <th>After Maturity Collection (Accumulated Amount)</th>
          </tr>
        </thead>  
        <tbody>
          <tr v-for="a in 6" :key="a">
            <td>{{ i }} year</td>
            <td>36,360</td>
            <td>41,360</td>
          </tr>  
        </tbody>
      </table>
    </div>
  </v-container>  
</template>

<style scoped>
table { table-layout: auto !important; }
</style>