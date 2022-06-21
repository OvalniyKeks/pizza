<template>
  <div
    class="header"
    :class="{'header-scroll': headerFixed}"
  >
    <div class="container">
      <HeaderTop />
    </div>

    <HelpersHr />

    <div class="container">
      <HeaderBottom />
    </div>

    <HelpersHr />
  </div>
</template>
<script>
export default {
  data () {
    return {
      headerFixed: false
    }
  },
  computed: {
    currScroll () {
      return this.$store.state.interface.currScroll
    },
  },
  watch: {
    currScroll (val) {
      if (val < 50) {
        this.headerFixed = false
      } else {
        this.headerFixed = true
      }
    }
  }
}
</script>
