<template>
  <div
    class="header"
    :class="{'header-scroll': headerFixed}"
    ref="header"
  >
    <div class="container">
      <HeaderTop />
    </div>

    <HelpersHr />

    <div
      class="container"
      ref="headerBottom"
    >
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
    currHeightHeader () {
      const header = this.$refs.header
      const headerBottom = this.$refs.headerBottom
      if (this.headerFixed) {
        return headerBottom.clientHeight
      } else if (header) {
        return header.clientHeight
      }
      return 0
    }
  },
  watch: {
    currScroll (val) {
      if (val < 50) {
        this.headerFixed = false
      } else {
        this.headerFixed = true
      }
    },
    currHeightHeader (val) {
      this.$store.commit('interface/set_curr_height_header', val)
    }
  }
}
</script>
