<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
      <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
    </div>

    <v-spacer></v-spacer>

    <div class="navs">
      <v-btn v-for="(nav, n) in navs" :key="n" text :to="nav.to">{{ nav.title }}</v-btn>
    </div>

  </v-app-bar>  
</template>

<script>
export default {
  data: () => ({
    navs: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'News', icon: 'mdi-home', to: '/news' },
      { title: 'Gallery', icon: 'mdi-home', to: '/gallery' },
      { title: 'Contact', icon: 'mdi-home', to: '/contact' }
    ]
  })
}
</script>