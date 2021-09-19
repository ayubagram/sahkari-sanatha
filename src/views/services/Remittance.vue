<template>
  <v-container class="remittance">
    <div class="download__links">
      <div class="download__title">Remittance</div>
      <p>We provide various services for online money transfers. Our service is the best known, most secure and reliable online service. You can send or receive money within minute to/from other people around the globe. You pay the lowest fees in the market for your transfer. Recipients do not require a bank account to receive funds.</p>
      <div class="mt-10 download__title">Type of Money Transfer Services</div>
      <ul>
        <li v-for="(item, i) in items" :key="i">{{ item }}</li>
      </ul>
    </div>
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