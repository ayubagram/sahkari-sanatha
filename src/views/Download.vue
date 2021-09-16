<template>
  <div class="downloads">
    <v-container class="download">
      <div class="download__links">
        <div class="download__title">Download Our PDF Files</div>  
        <ul class="d-flex flex-column mt-5" style="grid-gap: 20px;">
          <li v-for="a in 8" :key="a">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <v-divider class="mt-3" />
          </li>  
        </ul>
      </div>
      <div class="cards__with__links">
        <Card title="Links" />
        <Card title="Services" />
        <Card title="News" />  
      </div>
    </v-container> 
  </div> 
</template>

<script>
import Card from '../components/Cards'
export default {
  components: { Card }
}
</script>