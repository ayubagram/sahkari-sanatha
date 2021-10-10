<template>
  <v-container class="download">
    <div class="download__links">
      <div class="download__title">Download Our PDF Files</div>  
      <v-data-table :headers="headers" :items="downloads" :items-per-page="10">
        <template v-slot:[`item.sno`]="{ item }">
          <span class="caption font-weight-bold">{{ downloads.indexOf(item) + 1 }}.</span>
        </template>
        <template v-slot:[`item.download`]="{ item }">
          <v-btn icon color="primary" target="_blank" :href="item.file">
            <v-icon v-text="'mdi-cloud-download'" />
          </v-btn>
        </template>
      </v-data-table>
    </div>
    <div class="cards__with__links">
      <Card title="Links" />
      <Card title="Services" />
      <Card title="News" />  
    </div>
  </v-container>
</template> 

<script>
import { db } from '../firebase'
export default {
  data: () => ({
    headers: [
      { text: 'S.N.', align: 'center', sortable: false, value: 'sno', class: 'primary' },
      { text: 'Form Name', sortable: false, value: 'title', class: 'primary' },
      { text: 'Download', align: 'center', sortable: false, value: 'download', class: 'primary' },
    ],
    downloads: []
  }),
  methods: {
    async get() {
      this.$store.commit('SET_OVERLAY', true)
      await this.$binding("downloads", db.collection("downloads").where('status', '==', true).orderBy('createdAt', 'desc'))
      this.$store.commit('SET_OVERLAY', false)
    }
  },
  created() {
    this.get()
  }  
}
</script>

<style>
.download table {
  border-collapse: unset !important;  
  table-layout: auto !important;
}
.download table tr th, .download table tr td { 
  border: none !important; 
  height: 40px !important;
  padding: 0 10px !important;
}
td { font-weight: 300; font-size: 14px !important; }
.download table th:first-child { width: 50px !important; }
.download table th:last-child { width: 70px !important; }
</style>