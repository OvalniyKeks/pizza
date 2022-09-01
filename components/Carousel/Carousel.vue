<template>
  <ssr-carousel
    :slides-per-page='slidesPerPage'
    :gutter='gutter ? gutter : 30'
    :responsive='responsive ? responsive : responsiveDefault'
    :class="`${alignClass}`"
    class="carousel"
  >
    <slot></slot>
  </ssr-carousel>
</template>
<script>

export default {
  props: {
    slidesPerPage: Number,
    slidesPerPageMobile: Number,
    gutter: Number,
    responsive: Array,
    center: Boolean
  },
  data () {
    return {
      responsiveDefault: [
        {
          maxWidth: 1024,
          slidesPerPage: this.slidesPerPageMobile,
        }
      ]
    }
  },
  computed: {
    alignClass () {
      let align = 'carousel-align-left'
      if (this.center) {
        align = 'carousel-align-center'
      }
      return align
    }
  }
}
</script>
