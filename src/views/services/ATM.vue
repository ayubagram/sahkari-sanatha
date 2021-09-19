<template>
  <v-container>
    <div class="download__links">
      <div class="mb-3 download__title">KUSCCOOP SCT DEBIT CARD</div> 
      <p class="text-justify">KUSCCOOP Debit card enables you to make electronic transactions (cash withdrawal and purchase of goods and services through various POS terminals) at any time. KUSCCOOP Debit card is associated with Smart Choice Technologies Ltd (SCT). With KUSCCOOP Debit Card (SCT-UPI), individual can have easy access to their nominated account maintained with Kumari Saving & Credit Co-Operative Ltd. (KUSCCOOP) from any ATM location that is spread over more than 3,000 ATM terminals.</p><br>
      <p class="text-justify">Further you can make purchase of goods and services from more than 10,000 merchant locations through Point-of-Sale (POS) terminals. KUSCCOOP Debit card is accepted at all ATMs associated to SCT network and merchant locations that display/accept SCT UPI Debit Cards.</p> 
      
      <div  class="download__title mt-10">Key Features</div>
      <ul>
        <li v-for="(item, i) in features" :key="i" style="font-weight: 300;">{{ item }}</li>  
      </ul>
      
      <div class="download__title mt-10">Transaction Limit</div>
      <table>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Particular</th>
            <th>Amount</th>  
          </tr>
        </thead>  
        <tbody>
          <tr v-for="a in 4" :key="a">
            <td>{{ a + 1 }}.</td>  
            <td>Lorem ipsum dolor sit amet consectetur</td>
            <td>NPR 5000/-</td>
          </tr>
        </tbody>  
      </table>

      <div class="download__title mt-10">Fees & Charges</div>
      <table>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Particular</th>
            <th>Fees/Charges</th>  
          </tr>
        </thead>  
        <tbody>
          <tr v-for="a in 12" :key="a">
            <td>{{ a + 1 }}.</td>  
            <td>Lorem ipsum dolor sit amet consectetur</td>
            <td>NPR 5000/-</td>
          </tr>
          <tr>
            <td>13.</td>  
            <td colspan="2">Lorem ipsum dolor sit amet consectetur</td>
          </tr>
          <tr>
            <td>14.</td>  
            <td colspan="2">Lorem ipsum dolor sit amet consectetur</td>
          </tr>
        </tbody>  
      </table>

      <div class="download__title mt-10">ATM (Debit Card )</div>
      <ul>
        <li v-for="(item, i) in items" :key="i">{{ item }}</li>  
      </ul>

      <div class="download__title mt-10">ATM Location</div>
      <div style="border: .5px solid rgb(0 0 0 / 60%);" class="pa-3 text-center">
        <div class="title pb-1" style="line-height: 1;">Head Office</div>  
        <p style="font-weight: 400 !important;" class="my-1">Kumari Saving Co-Operative Ltd. (KUSCCOOP)</p>
        <p>Kumari Co-Operative Building, Kumari Chowk, Chabahil, Mitrapark, Kathmandu, Nepal</p>
      </div>
    </div>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    features: [
      'Access to wider ATM network throughout the nation',
      'PIN based secured transaction mechanism for every withdrawals and purchase',
      'Own your cards with 4 years validity',
      'Wide acceptance within Nepal',
      'Prompt SMS and email transaction alerts'  
    ],  
    items: [
      'We are connected with SCT (smart choice network)',
      'Easily withdraw money from all over Nepal',  
      'Card can be used for POS'
    ]  
  })  
}
</script>

<style scoped>
table { table-layout: unset !important; }
table tr td:first-child { width: 50px; }
ul li { cursor: text; }
</style>