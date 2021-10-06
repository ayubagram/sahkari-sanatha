<template>
  <v-app-bar color="primary" dark :app="fixed" elevate-on-scroll height="50">
    <v-container class="px-0 px-lg-3">
      <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)" class="d-block d-sm-block d-md-none" /> 
      <div class="navs d-none d-sm-none d-md-block">
        <v-menu offset-y v-for="(nav, n) in menus" :key="n" open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn height="50" tile text :to="nav.to" v-bind="attrs" v-on="on">
              <span v-text="nav.title" />
              <v-icon v-if="nav.children" v-text="'mdi-menu-down'" />
            </v-btn>
          </template>
          <v-list v-if="nav.children" class="pa-0" dense expand>
            <v-list-item v-for="(item, index) in nav.children" :key="index" :to="`${nav.to}${item.to}`">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-container>
  </v-app-bar>  
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    fixed: false,
  }),
  methods: {
    goto() {
      if(this.$route.path !== '/') this.$router.push('/')
    },
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
  },
  computed: {
    ...mapState(['drawer']),
  },
  created() {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) this.fixed = true
      else this.fixed = false
    })
  }
}
</script>

<style>
.v-list--dense .v-list-item .v-list-item__title {
  font-weight: 400 !important;
  letter-spacing: .5px !important;
  font-size: 12px !important;
}
</style>