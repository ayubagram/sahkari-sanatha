<template>
  <v-container class="d-flex flex-column" style="grid-gap: 12px;">
    <div class="career_item  white pa-4" v-for="(c, i) in careers" :key="i">
      <div class="d-flex flex-wrap align-center" style="grid-gap: 6px;">
        <div class="title">{{ c.position }}</div>
        <div style="height: 4px; width: 4px; border-radius: 50%;" class="grey" />
        <p>{{ c.noOfVacancy }}</p>
      </div>
      <p>{{ c.description }}</p>
    </div>
  </v-container>  
</template>

<script>
import { db } from '../firebase'
export default {
  data: () => ({
    careers: []
  }),
  methods: {
    async get() {
      this.$store.commit('SET_OVERLAY', true)
      await this.$binding("careers", db.collection("careers").orderBy('createdAt', 'desc'))
      this.$store.commit('SET_OVERLAY', false)
    }
  },
  created() {
    this.get()
  }  
}
</script>

<style scoped>
.career_item {
  border-radius: 6px;
  box-shadow: 0 1px 10px 0 rgb(0 0 0 / 15%);
}
</style>