<template>
  <v-container>
    <div class="mb-3" style="font-size: 25px;">Remittance</div>
    <p>We provide various services for online money transfers. Our service is the best known, most secure and reliable online service. You can send or receive money within minute to/from other people around the globe. You pay the lowest fees in the market for your transfer. Recipients do not require a bank account to receive funds.</p>
    <div class="mt-8 mb-2 primary--text" style="font-size: 25px;">Type of Money Transfer Services</div>
    <ul>
      <li v-for="(item, i) in items" :key="i"><p>{{ item }}</p></li>
    </ul>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    items: ['Western Union', 'MoneyGram', 'IME Remit', 'Xpress Money', 'City Express', 'Prabhu Remit', 'Himal Remit', 'JME Remit', 'Nepal Remit', 'Samsara Remit', 'Muktinath Remit']  
  })  
}
</script>

<style scoped>
ul li {
  list-style: auto;
  cursor: default;  
}
</style>