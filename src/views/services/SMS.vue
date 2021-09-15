<template>
  <v-container>
    <div class="mb-3" style="font-size: 25px;">SMS Banking</div>
    <p class="text-justify">SMS Banking is a technology-enabled service offering which allows our valued members to operate our selected services over their mobile phones using SMS messaging.</p> <br>
    <p class="text-justify">Our SMS banking lets you keep track of your account even while you are on the move. Through this, KUSCCOOP members can perform various financial and non-financial transactions. You can find your balance statement on your finger tips and receive important information about your account directly on your phone at all times and locations.</p><br>
    <p class="text-justify">To avail the service you just have to register yourself for the facility by filling a simple registration form at the Member service department of our office.</p>
    <p>Following features are available with our SMS Banking Facility:</p>
    <div class="mt-10 d-flex flex-column" style="grid-gap: 20px;">
      <div v-for="(item, i) in items" :key="i">
        <div class="primary--text mb-1" style="font-size: 25px;">{{ i + 1 }}. {{ item }}</div>
        <div class="d-flex flex-column" style="grid-gap: 4px;">
          <p>Lorem ipsum dolor</p>
          <p>adipisicing elit.</p>
          <p>sit amet consectetur</p>  
        </div>
      </div>  
    </div>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    items: [
      'Balance Enquiry', 'Mini Statement', 'Cheque Stop', 'NTC Prepaid Mobile Recharge', 'NCELL Prepaid Mobile Recharge', 
      'NTC Postpaid Payment', 'NTC PSTN (Landline) Bill Payment', 'NTC ADSL Bill Payment', 'SMS System Info'
    ]  
  })  
}
</script>