<template>
  <div class="header-bottom">
    <NuxtLink
      to="/"
      class="flex align-center"
    >
      <img
        src="~assets/images/logo.svg"
        class="logo"
      >
    </NuxtLink>
    <HeaderCategories class="mobile-hide" />

    <HelpersSpace></HelpersSpace>

    <Button
      orange
      class="mobile-hide"
      @click="isModalCart = !isModalCart"
    >
      <img src="~assets/images/icon/global/cart.svg">
      {{currPrice}} ₽
    </Button>

    <Modal
      v-model="isModalCart"
      align='right'
    >
      <ModalRight />
    </Modal>

    <Button
      width="32px"
      class="desktop-hide"
      @click="toggleMenuMobile"
    >
      <div
        class="header-burger"
        :class="{'active': menuMobile}"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Button>

  </div>
</template>
<script>
export default {
  computed: {
    menuMobile () {
      return this.$store.state.interface.menuMobile
    },
    currPrice () {
      return this.$store.getters['cart/currPrice']
    },

  },
  data () {
    return {
      isModalCart: false
    }
  },
  methods: {
    toggleMenuMobile (data) {
      this.$store.commit('interface/set_menu_mobile', data)
    }
  },
  watch: {
    '$route.name' () {
      this.toggleMenuMobile(false)
    }
  }
}
</script>
