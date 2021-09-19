<template>
  <v-container>
    <div class="download__links">
      <p class="text-justify">In our continuous efforts to provide innovative products to our members, Kumari Saving & Credit co-operative Ltd (KUSCCOOP) has  launched Kumari Saving & Credit co-operative Ltd (KUSCCOOP) Smart, a Mobile Banking application which provides access for our members to their accounts through mobile phone in a secured manner in both SMS and GPRS base.</p> <br>
      <p class="text-justify">It is Anywhere, Anytime, Any network base application, which provides member account information and real time transaction activities to the users. Members can also execute financial transaction in accounts within Kumari Saving & Credit co-operative Ltd (KUSCCOOP) and other Banks and Financial Institutions under the network of Kumari Saving & Credit co-operative Ltd (KUSCCOOP) Smart.</p>
      <div class="mt-4 download__title">Services available in KUSCCOOP Smart</div>
      <table>
        <thead>
          <tr>
            <th>GPRS Base</th>  
            <th>SMS Base</th>
          </tr>
        </thead> 
        <tbody>
          <tr v-for="(item, i) in items" :key="i">
            <td>{{ item.data1 }}</td>
            <td>{{ item.data2 }}</td>  
          </tr>
        </tbody> 
      </table>
    </div>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    items: [
      { data1: 'Online Balance and Information about Account and transactions.', data2: 'Account Information- Balance Enquiry, Mini Statement and other details of the account.' },
      { data1: 'Fund Transfer- Interbank, Bank to Bank, Registered Mobile (with in NMCL) Transfer.', data2: 'Fund Transfer- Interbank, Bank to Bank, Registered Mobile (with in NMCL) Transfer.' },
      { data1: 'Recharge Card- Broadlink, Dish Home, NTC GSM, NTC CDMA, NCELL, Smart Cell.', data2: 'Recharge Card – NT GSM, NT CDMA, Broadlink, Dish Home, Ridus, Smart Cell.' },
      { data1: 'Mobile Top Up NTC, NCELL and Smart Cell and Load Esewa.', data2: 'Utility Topup – NT Topup, NCELL Topup, SIM TV Topup, Dish Home Topup, Load Esewa. NT Billpay- NT Postpaid, NT Landline, ADSL.' },
      { data1: 'NEA Bill Payment.', data2: null },
      { data1: 'Merchant Payment.', data2: null }
    ]  
  })  
}
</script>

<style scoped>
table {
  border-collapse: collapse;  
  width: 100%;
  text-align: center;
  table-layout: fixed;
}
table tr th, table tr td { 
  border: .5px solid rgb(0 0 0 / 30%); 
  height: 46px;
  padding: 0 10px;
}
td { font-weight: 300; }
</style>