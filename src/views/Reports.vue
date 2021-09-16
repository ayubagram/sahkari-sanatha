<template>
  <div class="reports">
    <v-container class="download">
      <div class="download__links">
        <ul class="d-flex flex-column" style="grid-gap: 20px;">
          <li v-for="a in 2" :key="a">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <v-divider class="mt-3" />
          </li>  
        </ul>
      </div>
      <div class="cards__with__links">
        <Card title="Links" />
        <Card title="Services" />  
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