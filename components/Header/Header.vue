<template>
  <div class="header">
    <div class="container">
      <HeaderTop />
    </div>

    <HelpersHr />

    <div class="container">
      <HeaderBottom />
    </div>

    <HelpersHr />
    <HeaderMenu
      class="desktop-hide"
      :class="{'active': menuMobile}"
    />
  </div>
</template>
<script>
export default {
  computed: {
    menuMobile () {
      return this.$store.state.interface.menuMobile
    },
  }
}
</script>
