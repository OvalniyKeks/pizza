<template>
  <div class="header-bottom">
    <NuxtLink to="/">
      <img
        src="~assets/images/logo.svg"
        class="logo"
      >
    </NuxtLink>
    <HeaderCategories />

    <Button orange>
      <img src="~assets/images/icon/global/cart.svg">
      {{currPrice}} ₽
    </Button>

    <!-- Доделать -->
    <client-only>
      <carousel v-bind="options">
        <slide
          v-for="i in 5"
          :key="i"
          class="img-wrapper"
        >
          <img :src="`~assets/images/logo.svg`" />
        </slide>
      </carousel>
    </client-only>
  </div>
</template>
<script>
export default {
  computed: {
    currPrice () {
      return this.$store.state.cart.currPrice
    }
  },
  data () {
    return {
      options: {
        loop: true,
        perPage: 3,
        paginationEnabled: false
      }
    }
  },
}
</script>
<style lang="sass">
.carousel-wrapper
  padding: 40px
  height: 150px
  .VueCarousel-slide
    text-align: center
.img-wrapper img
  margin: auto
  width: 200px
  height: 100px
  background-image: linear-gradient(gray 100%, transparent 0)
</style>
