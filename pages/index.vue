<template>
  <div class="main">

    <div class="container">
      <Carousel
        class="m-mb-lg m-mb-md-m"
        :slides-per-page='8'
        :slides-per-page-mobile='3'
      >
        <Category
          v-for="(cat, i) of categories"
          :key="`category-main-page-${i}`"
          :category='cat'
        />
      </Carousel>
    </div>

    <div class="container">
      <Carousel
        class="m-mb-lg"
        :slides-per-page='4'
        :slides-per-page-mobile='1'
      >
        <Sale
          v-for="(sale, i) of sales"
          :key="`sale-main-page-${i}`"
          :sale='sale'
        />
      </Carousel>
    </div>

    <div class="container">
      <CheckAddress />
    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    categories () {
      return this.$store.state.interface.categories
    },
    sales () {
      return this.$store.state.sale.sales
    }
  }
}
</script>
