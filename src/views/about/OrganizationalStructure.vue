<template>
  <v-container class="download">
    <div class="download__links">
      <img src="http://kumarisaving.com.np/images/organizational-structure_1593154496.jpg" alt="Sahkari Sanstha">
    </div>
    <div class="cards__with__links">
      <Card title="Links" />
      <Card title="Services" /> 
      <Card title="News" />  
    </div>
  </v-container>  
</template>

<script>
import Card from '../../components/Cards'
export default {
  components: { Card }
}
</script>