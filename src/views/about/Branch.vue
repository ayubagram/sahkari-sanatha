<template>
  <v-container class="download department">
    <div class="download__links">
      <div class="download__title">Member Service Centre (Branch) Head</div>
      <table class="mt-4">
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

<style>
.department table { table-layout: auto !important; }
</style>