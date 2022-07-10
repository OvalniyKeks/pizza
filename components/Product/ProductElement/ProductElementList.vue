<template>
  <div class="product-element__list">
    <div v-if="type === 'add'">
      <ProductElementAdd
        v-for="(item, i) of value"
        :key="`product-element-add-${i}`"
        :product='item'
        @click="changeStatusElement(item)"
      />
    </div>
    <div v-if="type === 'delete'">
      <ProductElementDelete
        v-for="(item, i) of value"
        :key="`product-element-delete-${i}`"
        :product='item'
        @click="changeStatusElement(item)"
      />
    </div>
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
