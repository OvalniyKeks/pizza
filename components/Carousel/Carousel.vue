<template>
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
</template>
<script>
export default {
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
