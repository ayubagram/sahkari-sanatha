<template>
  <div class="notice">
    <v-container class="download">
      <div class="download__links">
        <ul class="d-flex flex-column text-capitalize" style="grid-gap: 20px;">
          <li v-for="(n, i) in notice" :key="i">
            <a :href="n.file" target="_blank" rel="noopener noreferrer" style="color: #337ab7 !important;">{{ n.title }}</a>
          </li>  
        </ul>
      </div>
      <div class="cards__with__links">
        <Card title="Links" />
        <Card title="Services" />  
      </div>
    </v-container>
    {{ notice }}
  </div>  
</template>

<script>
import { db } from '../firebase'
export default {
  data: () => ({
    notice: []
  }),
  methods: {
    async get() {
      this.$store.commit('SET_OVERLAY', true)
      await this.$binding("notice", db.collection("notice").where('status', '==', true).orderBy('createdAt', 'desc'))
      this.$store.commit('SET_OVERLAY', false)
    }
  },
  created() {
    this.get()
  }  
}
</script>