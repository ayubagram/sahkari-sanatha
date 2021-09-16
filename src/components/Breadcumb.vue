<template>
  <div style="background-color: #f5f5f5;" v-if="this.$route.path !== '/'">
    <div class="container">
      <div class="text-uppercase py-4" style="color: #2E3192; font-size: 2.3rem;">{{ $route.name }}</div>  
    </div>
    <div style="border-top: 1px solid rgb(128 128 128 / 30%); border-bottom: 1px solid rgb(128 128 128 / 30%);">
      <div class="container">
        <v-breadcrumbs class="pa-0" :items="items" divider="/" />
      </div>    
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      let pathArray = this.$route.path.split("/")
      pathArray.shift()
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        let text = path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-')
        breadcrumbArray.push({
          path: path,
          href: breadcrumbArray[idx - 2] ? "/" + breadcrumbArray[idx - 2].path + "/" + breadcrumbArray[idx - 1].path + "/" + path : breadcrumbArray[idx - 1] ? "/" + breadcrumbArray[idx - 1].path + "/" + path : "/" + path,
          disabled: true,
          text: text,
        });
        return breadcrumbArray;
      }, [])
      return breadcrumbs;
    }
  },

}
</script>

<style>
.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled { color: rgb(0 0 0 / 70%) !important; }
.v-breadcrumbs li { cursor: auto !important; }
</style>