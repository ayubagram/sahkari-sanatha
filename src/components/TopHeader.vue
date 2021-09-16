<template>
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
</style>