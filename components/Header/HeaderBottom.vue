<template>
  <div class="header-bottom">
    <NuxtLink
      to="/"
      class="flex align-center"
    >
      <img
        src="~assets/images/logo.svg"
        class="logo"
      />
    </NuxtLink>
    <HeaderCategories class="mobile-hide" />

    <HelpersSpace></HelpersSpace>

    <Button
      orange
      class="mobile-hide"
      @click="toggleModalCart"
    >
      <img src="~assets/images/icon/global/cart.svg" />
      {{ currPrice }} ₽
    </Button>

    <Modal
      v-model="isModalCart"
      align="right"
    >
      <CartModal v-model="isModalCart" />
    </Modal>

    <Button
      width="32px"
      @click="toggleMenuMobile"
    >
      <div
        class="header-burger desktop-hide"
        :class="{ active: isMenu }"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Button>

    <Modal
      v-model="isMenu"
      class="desktop-hide"
      align='left'
    >
      <HeaderMenu />
    </Modal>
  </div>
</template>
<script>
export default {
  computed: {
    currPrice () {
      return this.$store.getters['cart/currPrice']
    },
  },
  data () {
    return {
      isModalCart: false,
      isMenu: false
    }
  },
  methods: {
    toggleMenuMobile (data) {
      if (typeof data === 'boolean') {
        this.isMenu = data
        return
      }
      this.isMenu = !this.isMenu
    },
    toggleModalCart () {
      if (this.currPrice > 0) {
        this.isModalCart = !this.isModalCart
      }
    },
  },
  watch: {
    '$route.name' () {
      this.toggleMenuMobile(false)
    },
  },
}
</script>
