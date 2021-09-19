<!--<template>
  <div>
    <v-container class="top">
      <div>
        <div class="font-weight-bold reg pb-1">Regd.No.617/057</div>
      </div>
      <div class="topheader">
        <div>
            <div class="logo" style="height: 130px;">
              <img src="http://www.kumarisaving.com.np/img/logo/k1.jpg" alt="Sahkari Sanstha" srcset="">
            </div>
            <div class="pt-1 addess">
              Head Office: Kumari Co-Operative Building, Kumari Chowk, Chabahil, Mitrapark, Kathmandu, Nepal Tel:- 01-4478006, 01-4465102, 01-4465104, 01-4465256, 01-4465274
            </div>
        </div>
        <div>
          <div class="title mb-2" style="line-height: 1; color: #2E3192;">Member Service Center</div>
          <div class="service__center">
            <div v-for="(center, c) in centers" :key="c" class="d-flex flex-wrap primary--text align-center" style="grid-gap: 4px; font-size: 13px;">
              <v-icon v-text="'mdi-home'" color="primary" /> <p>{{ center.address }}</p> &nbsp;
              <v-icon v-text="'mdi-phone'" color="primary" /> <p>{{ center.phone }}</p>
            </div>
          </div>
          <div class="red--text mt-2" style="font-style: oblique; font-weight: 500;">Office Time: 9.30 AM to 5.30 PM</div>
        </div>
      </div>
    </v-container>
  </div>  
</template>

<script>
export default {
  data: () => ({
    centers: [
      { address: 'Manang Plaza, Thamel, Kathmandu', phone: '01-4512842' },
      { address: 'Mahalaxmi Plaza, Kalimati, Kathmamdu', phone: '01-5382514' },
      { address: 'Shankhu, Kathmandu', phone: '01-4451873' },
      { address: 'Machhapokhari, Balaju, Kathmandu', phone: '01-4383689' },
      { address: 'Koteshwor Chowk, KTM', phone: 'Comming Soon' }
    ]
  })
}
</script>

<style scoped>
.topheader {
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-gap: 20px;
}
.logo img { object-fit: contain !important; width: auto !important; }
.reg {
  font-size: 14px; 
  color: #2E3192; 
  padding-left: 108px;
}
.addess {
  font-size: 13px; 
  color: #2E3192; 
  font-weight: 500; 
  letter-spacing: .5px;
  padding-left: 108px;
}
@media (max-width: 920px) {
  .topheader { grid-template-columns: 100%; }
  .logo img { object-fit: contain !important; width: 100% !important; }
  .addess { text-align: center; }
  .reg, .addess { padding-left: 0 !important; }
}
.service__center .v-icon.v-icon { font-size: 16px !important; }
</style>-->

<template>
  <v-container class="top py-0">
    <div style="height: 100px;">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0vFVw8lCM7vYz5kooYzUXmTuepWmOBirxw&usqp=CAU" alt="Sahkari Sanstha">
    </div>
    <div class="d-flex flex-column" style="grid-gap: 12px;">
      <div v-for="(item, i) in items" :key="i" class="d-flex" style="grid-gap: 8px;">
        <v-icon v-text="item.icon" />
        <div>{{ item.value }}</div>
      </div>
    </div>  
    <div style="max-width: 150px;">
      <v-select dense outlined hide-details v-model="language" :items="['Nepali', 'English']" />
    </div>
    <div>
      <v-btn icon v-for="(social, s) in socials" :key="s" :color="social.color">
        <v-icon v-text="social.icon" />
     </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    language: 'Nepali',
    items: [
      { icon: 'mdi-phone', value: '068-521699' },
      { icon: 'mdi-email', value: 'info@sahkari.com' }
    ],
    socials: [
      { icon: 'mdi-facebook', href: 'https://www.facebook.com', color: '#4267B2', title: 'facebook' },
      { icon: 'mdi-twitter', href: 'https://www.twitter.com', color: '#1DA1F2', title: 'Twitter' },
      { icon: 'mdi-youtube', href: 'https://www.youtube.com', color: '#FF0000', title: 'youTube' },
      { icon: 'mdi-instagram', href: 'https://www.instagram.com', color: '#8a3ab9', title: 'Instagram' },
      { icon: 'mdi-linkedin', href: 'https://www.linkedin.com', color: '#0077b5', title: 'Linkedin' }, 
    ]
  })
}
</script>

<style>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 12px;
}
@media (max-width: 860px) {
}
</style>