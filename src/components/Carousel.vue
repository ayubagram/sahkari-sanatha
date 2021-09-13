<template>
  <v-carousel hide-delimiters hide-delimiter-background cycle :height="`${height}vh`" show-arrows-on-hover>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item" />
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    items: [
      'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
    ],  
  }),
  computed: {
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 40
        case 'sm': return 55
        case 'md': return 70
        case 'lg': return 80
        case 'xl': return 90
        default: return 90
      }
    }
  }
}
</script>