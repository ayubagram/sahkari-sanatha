<template>
  <v-container class="download department">
    <div class="download__links d-flex flex-column" style="grid-gap: 20px;">
      <div v-for="(item, i) in items" :key="i">
        <div class="download__title">{{ i+1 }}. {{ item.title }}</div>
        <p>{{ item.sub }}</p>
      </div>
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
      { title: 'Our dreams are empowered by our values', sub: 'Our core values have shaped our culture and defined our character. They are designed to generate enduring, profitable, secured and sustainable growth for our institution, members and ourselves.' },
      { title: 'Integrity', sub: 'Inspiring trust by adhering to ethical standards, honest, transparent dealing and responsible action.' },
      { title: 'Reliability', sub: 'Striving to earn complete members trust and being the first choice of our members.' },
      { title: 'Member Satisfaction', sub: 'Focusing all our perspectives, resources, experiences, competencies, process and decisions on achieving complete member satisfaction.' },
      { title: 'Commitment', sub: 'Honoring the commitment of quality, timely service and member care aiming to attain world class standard Co-Operative service, innovate, continuously to face changing threats and market challenges.' }
    ]
  })
}
</script>