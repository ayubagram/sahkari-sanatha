<template>
  <v-container class="download department">
    <div class="download__links">
      <div class="download__title">Our Culture</div>
      <p>Our value relationships and believe in nurturing then with at most care and concern. We have developed enduring bonds with our community people members, employees associate and the society. These bonds transcend barriers to enhance and enrich all of us.</p>
      <div class="d-flex flex-column mt-5" style="grid-gap: 20px;">
        <div v-for="(item, i) in items" :key="i">
          <div class="download__title">{{ i+1 }}. {{ item.title }}</div>
          <p>{{ item.sub }}</p>
        </div>
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
      { title: 'Enrivhing our employees', sub: 'At Kumari Saving & Credit Co-Operative Ltd. (KUSCCOOP) each employee is a vital part of the (KUSCCOOP) family. Our employees are our assets and we believe in continuous investment in our human capital through talent nurturing, reward programs in house, and other national and international trainings, seminar meting and team based interaction. We offer facilities such as leave allowances, insurance, performance and product base incentives, permanent job and pension etc.  ' },
      { title: 'Partnerships that empower  ', sub: 'We are a co-operative entity and know that our cooperative alliances have the power to take the organization forward. Our national and international associates are our strength. Our value addition empowers us to challenges in to opportunities. The Co-Operative department of Bagmati province, Co-Operative department of Nepal, Ministry of Co-Operative and land reform. All our associations including National Co-Operative, Development Association, National Co-Operative Development Board, NEFSCUN, ACCU, WOCCU and ICA for  mutual trust.' },
      { title: 'About Social Responsibility', sub: 'All the endeavors run by Kumari Saving & Credit Co-Operative Ltd. (KUSCCOOP) are essentially human. We began to give financial services to the members but now the mission moved forward to concern for community and social work for save environment, health, culture, norms, values and ethic in community.' },
    ]
  })
}
</script>