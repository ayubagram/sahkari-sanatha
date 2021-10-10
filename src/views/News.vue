<template>
  <v-container>
    <div class="news">
      <div v-for="(n, i) in news" :key="i" class="news__container">  
        <div class="news__img">
          <img :src="n.image" :alt="n.title">  
        </div>
        <div class="pa-3 pa-md-4">
          <p class="text__ellipse black--text">{{ n.description }}</p>
        </div>
      </div>  
    </div>
  </v-container>  
</template>

<script>
import { db } from '../firebase'
export default {
  data: () => ({
    news: []
  }),
  methods: {
    async get() {
      this.$store.commit('SET_OVERLAY', true)
      await this.$binding("news", db.collection("news").where('status', '==', true).orderBy('createdAt', 'desc'))
      this.$store.commit('SET_OVERLAY', false)
    }
  },
  created() {
    this.get()
  }  
}
</script>