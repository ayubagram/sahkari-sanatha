<template>
  <v-container class="download department">
    <div class="download__links">
      <div class="download__title" v-for="(item, i) in items" :key="i">{{ i+1 }}. {{ item }}</div>
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
  components: { Card },
  data: () => ({
    items: [
      'Voluntary and Open Membership',
      'Member\'s Democratic Control',
      'Member\'s Economic Participation',
      'Autonomy and Independence',
      'Education, Training and Information',
      'Co-Operation Among Co-Operatives',
      'Concern for Community'
    ]
  })
}
</script>