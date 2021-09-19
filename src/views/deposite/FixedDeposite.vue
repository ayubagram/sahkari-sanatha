<template>
  <v-container>
    <div class="download__links">
      <b>A. PERIODIC (Fixed) DEPOSIT SCHEMES</b>
      <p>Periodic deposit schemes are for a fixed amount of deposits as a time deposit A/c, where KUSCCOOP members can deposit minimum amount of 10,000NPR to an open limit to top deposit. Interest rates will be differentiated & can be negotiated always according to financial fair market compition scenario and duration in terms of taking deposits for 3 months up to 3 years.</p>
      <br>
      <b class="mb-2">B. GENERAL PERIODIC (Fixed) DEPOSIT SCHEMES</b>
      <table>
        <thead>
          <tr class="primary">
            <th>Duration</th>
            <th>Quarterly Interest Pay</th>
            <th>After Maturity Pay</th>  
          </tr>
        </thead>  
        <tbody>
          <tr v-for="a in 4" :key="a">
            <td>{{ i }} year</td>
            <td>7.75%</td>
            <td>8.25%</td>
          </tr>  
        </tbody>
      </table>
      <br>
      
      <b class="mb-2">C. CHILD EDUCATION PERIODIC (Fixed) DEPOSIT SCHEMES</b>
      <table>
        <thead>
          <tr class="primary">
            <th>Duration</th>
            <th>Quarterly Interest Pay</th>
            <th>After Maturity Pay</th>  
          </tr>
        </thead>  
        <tbody>
          <tr v-for="a in 4" :key="a">
            <td>{{ i }} year</td>
            <td>7.75%</td>
            <td>8.25%</td>
          </tr>  
        </tbody>
      </table>
      <br>

      <b class="mb-2">D. SENIOR CITIZENS PERIODIC (Fixed) DEPOSIT SCHEMES</b>
      <table>
        <thead>
          <tr class="primary">
            <th>Duration</th>
            <th>Monthly Interest Rate</th>  
          </tr>
        </thead>  
        <tbody>
          <tr v-for="a in 3" :key="a">
            <td>{{ i }} year</td>
            <td>5.00% (monthly basis)</td>
          </tr>  
        </tbody>
      </table>
      <br>
      <p style="font-weight: 500 !important;">*Note: Interest rate can be negotiated up to 0.25% on share amount additional deposit.</p>
      <p>(1) Interest rate can be negotiated up to 0.25% on share amount additional deposit of 10%</p>
      <p>(2) If you have more query on interest rate. Please contact Headquarter (Head Office) or the Service Center via Phone call or the direct visit to the office.</p>
    </div>
  </v-container>  
</template>

<style scoped>
table { table-layout: auto !important; }
</style>