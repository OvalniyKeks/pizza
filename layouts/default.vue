<template>
  <div class="layout layout-default">

    <Header />
    <Nuxt class="page" />
    <Footer />

    <!-- <ModalLayout /> -->

  </div>
</template>
<script>
export default {
  beforeMount () {
    window.addEventListener('scroll', this.setCurrScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.setCurrScroll);
  },
  methods: {
    setCurrScroll () {
      this.$store.commit('interface/set_curr_scroll', window.scrollY)
    }
  }
}
</script>
