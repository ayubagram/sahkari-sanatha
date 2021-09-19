<template>
  <v-container class="download">
    <div class="download__links">
      <p>This type of loan helps to provide youth and yonger population for encouraged their creative work within the country, production, manufacturing, export & Import and new creation who wants to do business inside the country.</p> <br>
      <b>Requirement Documents</b>
      <ul>
        <li v-for="a in 5" :key="a">Company/Firm Documents</li>
      </ul>
    </div>
    <div class="cards__with__links">
      <Card title="Links" />
      <Card title="Services" /> 
      <Card title="News" />  
    </div>
  </v-container>  
</template>