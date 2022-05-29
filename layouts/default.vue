<template>
  <div class="layout layout-default">
    <Header />
    <!-- <HeaderMenu
      class="desktop-hide"
      :class="{'active': menuMobile}"
    /> -->
    <Nuxt class="page" />
    <Footer />
  </div>
</template>
<script>
export default {
  // computed: {
  //   menuMobile () {
  //     return this.$store.state.interface.menuMobile
  //   },
  // }
}
</script>
