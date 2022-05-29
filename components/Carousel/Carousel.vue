<template>
  <ssr-carousel
    :slides-per-page='slidesPerPage'
    :gutter='gutter ? gutter : 30'
    :responsive='responsive ? responsive : responsiveDefault'
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
    responsive: Array
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
}
</script>
