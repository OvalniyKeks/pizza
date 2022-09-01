<template>
  <div class="product-element__list">
    <Carousel
      v-if="type === 'add'"
      :slides-per-page='4'
      :slides-per-page-mobile='3'
      :gutter='20'
    >
      <ProductElementAdd
        v-for="(item, i) of value"
        :key="`product-element-add-${i}`"
        :product='item'
        @click="changeStatusElement(item)"
      />
    </Carousel>
    <Carousel
      v-if="type === 'delete'"
      :slides-per-page='4'
      :slides-per-page-mobile='3'
      :gutter='20'
    >
      <ProductElementDelete
        v-for="(item, i) of value"
        :key="`product-element-delete-${i}`"
        :product='item'
        @click="changeStatusElement(item)"
      />
    </Carousel>
  </div>
</template>
<script>
export default {
  props: {
    value: Array,
    type: String
  },
  methods: {
    changeStatusElement (product) {
      product.disable = !product.disable
      this.$emit('change', product)
    }
  }
}
</script>
