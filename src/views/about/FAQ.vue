<template>
  <v-container class="pa-5 pa-sm-6 pa-md-7 pa-lg-8" style="border: .5px solid rgb(0 0 0 / 10%); ">
    <v-row justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item, i) in items" :key="i">
          <v-expansion-panel-header class="title">{{ item.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>{{ item.sub }}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>  
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Do you offer after-sale support?', sub: 'Yes, I provide lifetime support through my support forums, the comments section of the theme, email and twitter.' },
      { title: 'Is there any documentation of the theme?', sub: 'Yes, it works with the latest WordPress version and it is also backward compatible down to WP 3.0' },
      { title: 'Is there any documentation of the theme?', sub: 'Of course. The theme has extensive documentation. You can find the help files inside the archive you’ve downloaded. In the “help” folder open the “index” file.' },
      { title: 'Is your theme SEO Optimized?', sub: 'Yes, the theme is SEO optimized and it follows the latest trends in onsite optimization. Search Engine Optimization has been made a priority when designing the theme.' }
    ]
  })
}
</script>