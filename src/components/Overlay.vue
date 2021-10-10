<template>
  <div class="text-center">
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>
  </div>
</template>

<script>
export default {
  computed: {
    overlay() {
      return this.$store.state.overlay  
    }  
  }  
}
</script>