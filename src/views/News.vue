<template>
  <v-container>
    <div class="news">
      <div v-for="(n, i) in news" :key="i" class="news__container">
        <div class="news__info pa-3 pa-md-4">
          <span class="text__ellipse">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nostrum vel quis laudantium</span>
        </div>  
        <div class="news__img">
          <img :src="n" alt="News Description">  
        </div>
      </div>  
    </div>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    news: [
      'https://images.financialexpress.com/2021/07/6-4.jpg',
      'https://images.shiksha.com/mediadata/images/articles/1619690858phpG6CbEf.jpeg',
      'https://assets.fullertonindia.com/sites/default/files/Business-Finance.jpg',
      'https://img.freepik.com/free-photo/front-view-finance-business-elements-assortment_23-2148793759.jpg',
      'https://www.eubrazilconnect.com/wp-content/uploads/2021/03/illustration-financial-concept_53876-37658.jpg',
      'https://blogs.worldbank.org/sites/default/files/styles/card/public/2021-06/bank_inspection_twitter_card.jpg',
      'https://www.ifs.cn/-/media/images/refresh2019/t3-page-intro-1200x630/solutions-erp-global-financials.jpg',
      'https://cdn.crn.in/wp-content/uploads/2020/07/27131426/CRN-Finance-FinTech-Digital-Technology-696.jpg',
      'https://www.mfw4a.org/sites/default/files/styles/320x240/public/2019-01/home_long-term-finance.jpg'  
    ]  
  })  
}
</script>

<style>
.news {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 12px;  
}
.news__container { position: relative; }
.news__info {
  background-color: rgb(0 0 0 / 60%); 
  position: absolute;
  bottom: 0;
}
.news__img { height: 200px; }
@media (max-width: 1060px) {
  .news { grid-template-columns: repeat(auto-fit, minmax(32%, 1fr)); }  
}
@media (max-width: 760px) {
  .news { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }  
}
@media (max-width: 500px) {
  .news { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }  
}
</style>