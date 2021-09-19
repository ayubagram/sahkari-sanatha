<template>
  <v-container>
    <div class="download__links">
      <p>The Savings account is meant for those individuals who have a habit of saving money from their earnings so that they can use it when they require. It is a transactional interest-bearing account wherein a deposit is placed with the Bank for an unspecified period, which can be withdrawn whenever required through different means.</p><br>
      <b>Kumari Saving offers wide range of Savings Accounts as below:</b><br><br>
      <b>A. SAVING SCHEMES</b>
      <p>Kumari Co-operative is providing the following savings schemes to all our members.</p> <br>
      <b>B. GENERAL SAVINGS</b>
      <p>This saving scheme A/c can be open with minimum deposit 100NPR on 4.00% Interest (monthly basis) per annum. Interest is calculated on the basis of on Quarterly basis of Nepali Fiscal Year. We provide Cheque book & deposit passbook for free.</p> <br>
      <b>C. KUMARI SPECIAL SAVINGS</b>
      <p>This saving scheme A/c can be open with minimum deposit 100NPR on 5.5% Interest (on daily basis) per annum. Interest is calculated as on Quarterly basis of Nepali Fiscal Year. We provide Cheque book & deposit passbook for free.</p>
      <br>
      <p>*Membership should be buy 5,000NPR share.</p> <br>
      <b>D. NARI SURKSHYA (Women Security) SAVINGS</b>
      <p>This saving scheme is for female members to persuade and increasing the habit of savings for their financially secured future. This A/c can be enrolled with 1,000NPR on 4.00% Interest (on daily basis) per annum. Interest is calculated on Quarterly basis of Nepali Fiscal Year. We provide Cheque book & deposit passbook for free.</p> <br>
      <b>E. KUMARI SUPER SAVINGS A, B & C</b>
      <table class="mt-1">
        <thead>
          <tr class="primary">
            <th>Minimum Deposit Balance</th>
            <th>Share Amount</th>
            <th>Interest Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in 3" :key="a">
            <td>“A” 1,000NPR</td>
            <td>5,000NPR</td>
            <td>4.00% (on daily basis)</td>
          </tr>
        </tbody>
      </table> <br>
      <p>Interest is calculated and deposited on Quarterly basis of Nepali Fiscal Year. We provide Cheque book & deposit passbook for free.</p> <br>
      <b>F. KUMARI GOLDEN SAVINGS A, B, C & D</b>
      <table class="mt-1">
        <thead>
          <tr class="primary">
            <th>Minimum Deposit Balance</th>
            <th>Share Amount</th>
            <th>Interest Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in 3" :key="a">
            <td>“A” 1,000NPR</td>
            <td>5,000NPR</td>
            <td>4.00% (on daily basis)</td>
          </tr>
        </tbody>
      </table> <br>
      <p>Interest is calculated and deposited on Quarterly basis of Nepali Fiscal Year. We provide Cheque book & deposit passbook for free.</p> <br>
      <b>G. KUMARI SUPREME SAVINGS</b>
      <p>This specific saving scheme is for business holding members of KUSCCOOP for up to maximum return on deposits to their hard-earning money. This A/c can be open with minimum deposit amount 50,000NPR on 5.50% Interest (on daily basis) per annum where these A/c holding members must have share amount of 50,000NPR. We provide Cheque book, deposit passbook and A/c statement for free.</p> <br>
      <p>*ATM Cards can be requested at front desk of Head Office Chabahil, Mitrapark, Kathmandu, Nepal.</p> <br>
      <b>H. BUSINESS PLUS SAVINGS</b>
      <p>This saving scheme A/c can be open with minimum amount of deposit 50,000NPR on 4.00% to 5.50% Interest (on daily basis) per annum.</p> <br>
      <p>*Ceiling at available deposit amount up to top limit. Interest is deposited on Quarterly basis of Nepali Fiscal Year. We provide Cheque book & deposit passbook for free.</p> <br>
      <b>I. KUMARI “DHAN BARSHA” REGULAR SAVINGS</b> <br> <br>
      <b>J. MEMBER LIFE SECURITY SAVINGS</b> <br> <br>
      <b>K. MEDICAL EXPENDITURE SAVINGS</b> <br><br>
      <b>L. INSURANCE SAVINGS</b> <br><br>
      <b>M. FARMER SAVINGS</b>
      <p>This saving scheme A/c can be open with minimum amount of deposit 100NPR on 5.25% Interest (on daily basis) per annum.</p> <br>
      <b>N. LABOURS SAVINGS</b>
      <p>This saving scheme A/c can be open with minimum amount of deposit 100NPR on 5.25% Interest (on daily basis) per annum.</p><br>
      <b>O. SELF EMPLOYEMENT SAVINGS</b> <br> <br>
      <b>P. YOUTH SAVINGS</b>
      <p>This saving scheme A/c can be open with minimum amount of deposit 100NPR on 5.25% Interest (on daily basis) per annum.</p>
    </div>
  </v-container>  
</template>

<style scoped>
table { table-layout: auto !important; }
table tr td { 
  font-weight: 300;
  font-size: 16px;
}
</style>