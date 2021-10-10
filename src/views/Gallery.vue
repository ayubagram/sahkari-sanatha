<template>
  <v-container>
    <div class="gallery">
      <div class="gallery__img" v-for="(img, i) in gallery" :key="i">
        <img :src="img.image" loading="lazy" :alt="img.title">
      </div>    
    </div>
  </v-container>  
</template>

<script>
import { db } from '../firebase'
export default {
  data: () => ({
    gallery: []
  }),
  methods: {
    async get() {
      this.$store.commit('SET_OVERLAY', true)
      await this.$binding("gallery", db.collection("gallery").orderBy('createdAt', 'desc'))
      this.$store.commit('SET_OVERLAY', false)
    }
  },
  created() {
    this.get()
  }  
}
</script>