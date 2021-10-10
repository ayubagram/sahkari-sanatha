<template>
  <v-container class="management__teams">
    <div v-for="(team, t) in teams" :key="t" class="team__member">
      <div class="team__member__img">
        <img :src="team.image" :alt="team.name">
      </div>
      <div class="team__member__info">
        <div class="download__title" style="margin-bottom: 0px !important;">{{ team.name }}</div>
        <p>{{ team.position }}</p>
      </div>
    </div>
  </v-container>  
</template>

<script>
import { db } from '../../firebase'
export default {
  methods: {
    async get() {
      this.$store.commit('SET_OVERLAY', true)
      await this.$binding("teams", db.collection("members").where('status', '==', true).orderBy('createdAt', 'desc'))
      this.$store.commit('SET_OVERLAY', false)
    }
  },
  created() {
    this.get()
  }  
}
</script>