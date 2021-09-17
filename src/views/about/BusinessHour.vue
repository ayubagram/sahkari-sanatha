<template>
  <v-container class="download department">
    <div class="download__links">
      <div class="download__title">Saturday & Public Holiday's</div>
      <div class="download__title">Office Time: 10 AM - 3 PM</div>
      <div class="download__title">[ Only from Head Office ]</div>
      <table class="mt-4">
        <tbody>
          <tr><td colspan="2" class="primary title">Winter Season (16th Kartik to 15th Magh)</td></tr>
          <tr><td colspan="2">Winter Season (16th Kartik to 15th Magh)</td></tr>
          <tr>
            <td>Sunday to Friday</td>
            <td>9:30 AM to 5 PM</td>
          </tr>
          <tr>
            <td>Saturday & Public holiday's [Only Head Office]</td>
            <td>10 AM to 3 PM</td>
          </tr>
          <tr><td colspan="2" class="primary title">Summer Season (16th Magh to 15th Kartik)</td></tr>
          <tr><td colspan="2">Winter Season (16th Kartik to 15th Magh)</td></tr>
          <tr>
            <td>Sunday to Friday</td>
            <td>9:30 AM to 5:30 PM</td>
          </tr>
          <tr>
            <td>Saturday & Public holiday's [Only Head Office]</td>
            <td>10 AM to 3 PM</td>
          </tr>
        </tbody>
      </table>
      <div class="mt-6 mb-3">Below are the list branch providing Co - Operative service.</div>
      <table>
        <thead class="primary">
          <tr>
            <th style="width: 50px !important; padding: 0 !important;">S.N.</th>
            <th>Member Service Centre</th>
            <th>Location</th>
            <th>Telephone</th>
            <th>Contact Person</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in 5" :key="a">
            <td>{{ a }}.</td>
            <td>Thermal Member Service Center</td>
            <td>Kalaiya-10, Bara, Nepal</td>
            <td>051258222</td>
            <td>Suraj Paudel</td>
          </tr>
        </tbody>
      </table>
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