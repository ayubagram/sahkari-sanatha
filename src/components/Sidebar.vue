<template>
  <v-navigation-drawer color='primary' dark disable-resize-watcher mobile-breakpoint="10024" v-model="drawer" width="230" app>

    <v-card height="100" tile elevation='0' class='primary d-flex justify-center align-center title'>
      <b><span class="secondary--text">SahKari Sanstha</span></b>
    </v-card>

    <v-divider></v-divider>

    <v-list expand nav tile dense>
      <v-list-item-group v-model="selectedItem">
        <div v-for="(item, i) in menus" :key="i">
          <v-list-group v-if="item.children" :value="false" :prepend-icon="item.icon" active-class="active__class">
            <template v-slot:activator>
              <v-list-item-title v-text="item.title" style="letter-spacing: 1px; font-weight: 400 !important; font-size: 16px !important;" />
            </template>
            <v-list-item v-for="(child, c) in item.children" :key="c" :to="`${item.to}${child.title}`" active-class="active__class">
              <v-list-item-icon class="mx-2">
                <v-icon v-text="child.icon" />
              </v-list-item-icon>
              <v-list-item-title v-text="child.title" style="letter-spacing: 1px; font-weight: 400 !important; font-size: 16px !important;" />
            </v-list-item>
          </v-list-group>
          <v-list-item :to="item.to" v-else>
            <v-list-item-icon class="mx-2">
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-title v-text="item.title" style="letter-spacing: 1px; font-weight: 400 !important; font-size: 16px !important;" />
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    
  }),

  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('SET_DRAWER', val)
      },
    },      
  }
}
</script>

<style>
.v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child) { margin-left: 0 !important; }
.v-application--is-ltr .v-list-item__icon:first-child { margin-right: 16px !important; }
.v-list--dense .v-list-item .v-list-item__icon { margin-left: 8px !important; }
.v-list-group .v-list-group__header .v-list-item__icon.v-list-group__header__append-icon { min-width: 30px !important; }
.v-icon.v-icon { font-size: 20px !important; }
.active__class {
  color: #fff !important;
  background-color: rgba(255, 255, 255, 0.2) !important;
}
</style>