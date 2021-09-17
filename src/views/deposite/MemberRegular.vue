<template>
  <v-container>
    <div class="download__links">
      <p>KUMARI 365 DAYS REGULAR SAVINGS</p> <br>
      <p class="mb-2">This A/c is to encourage a daily savings to our specific members, those who having businesses; to an optimum return in just one year. In this Account daily (fixed) deposits must be maintained on regular installment basis. This savings plan is meant to encourage members to save on a daily basis, especially those who are doing business. This savings plan will help its members to significantly increase their annual income if they save the amount that can be deposited from their business on a daily basis. KUSCCOOP requests to save by joining in this scheme to each of our business holding members, so that you can get the highest return on the lump sum deposited inadvertently and the interest earned by sole in your annual income.</p>
      <table>
        <thead>
          <tr class="primary">
            <th>Daily (Fixed) Installment</th>
            <th>Deposited Amount (in 365 Days)</th>
            <th>After Maturity Collection (Accumulated Amount)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in 6" :key="a">
            <td>{{ a }}00</td>
            <td>21555</td>
            <td>25544</td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-container>  
</template>