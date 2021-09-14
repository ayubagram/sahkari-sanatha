<template>
  <v-container class="download my-8">
    <div class="download__links py-4 px-6 primary--text">
      <div style="font-size: 30px; font-weight: 300;" class="mb-6">Download Our PDF Files</div>  
      <ul class="d-flex flex-column" style="grid-gap: 20px;">
        <li v-for="a in 8" :key="a">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <v-divider class="mt-3" />
        </li>  
      </ul>
    </div>
    <div class="d-flex flex-column" style="grid-gap: 20px; min-width: 280px;">
      <div class="quick__card py-3 px-4">
        <div style="font-size: 16px; font-weight: 400; opacity: .75;" class="mb-6 mt-2">Quick Link</div>
        <div class="d-flex flex-column mb-6" style="grid-gap: 16px;">
          <div v-for="a in 4" :key="a" class="d-flex" style="grid-gap: 10px;">
            <v-icon v-text="'mdi-check'" color="white" class="pa-1 primary" style="border-radius: 50%; height: 20px; width: 20px; font-size: 14px !important;" />  
            <p style="font-weight: 400 !important;">Lorem ipsum</p>
          </div>  
        </div>
      </div>  
      <div class="quick__card py-3 px-4">
        <div style="font-size: 16px; font-weight: 400; opacity: .75;" class="mb-6 mt-2">Services</div>
        <div class="d-flex flex-column mb-6" style="grid-gap: 16px;">
          <div v-for="a in 4" :key="a" class="d-flex" style="grid-gap: 10px;">
            <v-icon v-text="'mdi-check'" color="white" class="pa-1 primary" style="border-radius: 50%; height: 20px; width: 20px; font-size: 14px !important;" />  
            <p style="font-weight: 400 !important;">Lorem ipsum</p>
          </div>  
        </div>
      </div> 
      <div class="quick__card py-3 px-4">
        <div style="font-size: 16px; font-weight: 400; opacity: .75;" class="mb-6 mt-2">Services</div>
        <div class="d-flex flex-column mb-6" style="grid-gap: 16px;">
          <div v-for="a in 4" :key="a" class="d-flex" style="grid-gap: 10px;">
            <v-icon v-text="'mdi-check'" color="white" class="pa-1 primary" style="border-radius: 50%; height: 20px; width: 20px; font-size: 14px !important;" />  
            <p style="font-weight: 400 !important;">Lorem ipsum</p>
          </div>  
        </div>
      </div>  
    </div>
  </v-container>  
</template>