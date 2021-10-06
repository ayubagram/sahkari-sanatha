<template>
  <v-container class="top py-0">
    <div class="d-flex align-center" style="grid-gap: 12px;">
      <div class="top__img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0vFVw8lCM7vYz5kooYzUXmTuepWmOBirxw&usqp=CAU" alt="Sahkari Sanstha">
      </div>
      <div class="d-flex flex-column" style="grid-gap: 12px;">
        <div v-for="(item, i) in items" :key="i" class="d-flex" style="grid-gap: 8px;">
          <v-icon v-text="item.icon" color="primary" />
          <p>{{ item.data }}</p>
        </div>
      </div>  
    </div>
    <div class="d-flex align-center top_social" style="grid-gap: 12px;">
      <!-- <div style="max-width: 150px;">
        <v-select dense outlined hide-details :items="['Nepali', 'English']" v-model="language" />
      </div> -->
      <div>
        <v-btn icon v-for="(social, s) in socials" :key="s" :color="social.color" target="_blank" :href="social.href">
          <v-icon v-text="social.icon" />
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    language: 'Nepali',
    items: [
      { icon: 'mdi-phone', data: '01-4451873, 01-4383689' },
      { icon: 'mdi-email', data: 'sahkarisanstha@gmail.com' }  
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
  justify-content: space-between;
  grid-gap: 12px;
}
.top__img { height: 100px; }
.top img { object-fit: contain !important; }
@media (max-width: 720px) {
  .top { flex-direction: column; }
  .top__img { height: 80px; }
  .top_social { margin-bottom: 12px; justify-content: space-between; }
}
</style>