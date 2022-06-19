<template>
  <div
    class="flex"
    v-if="product"
  >
    <img
      :src="image(product.image)"
      class="w-50"
    >
    <div class="w-50">
      <div class="title m-mb-sm">{{product.label}}</div>
      <div class="flex align-center justify-between">
        <ProductCompound
          v-for="(elCompound, i) of product.compound"
          :key="`elCompound-modal-${i}`"
          :product='elCompound'
          @disable='toggleElCompound'
        />
      </div>
    </div>
    <ModalClose @click="$emit('input', false)" />
  </div>
</template>
<script>
import defaultImage from '@/assets/images/pizza-placeholder.png'
export default {
  props: {
    product: Object
  },
  data () {
    return {
      defaultImage: defaultImage
    }
  },
  methods: {
    toggleElCompound (el) {
      const product = JSON.parse(JSON.stringify(this.product))
      const elCompound = product.compound.find(item => item.id === el.id)
      elCompound.disable = !elCompound.disable
      this.$store.commit('interface/set_modal_product_data', product)
    },
    image (image) {
      return image ?? this.defaultImage
    }
  }
}
</script>
