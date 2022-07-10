<template>
  <Card
    class="product-card--sm m-mb-md flex flex-nowrap"
    padding='16px'
  >
    <img
      :src="image(product.image)"
      class="image m-mr-sm"
    >
    <div class="w-100">
      <div
        class="title link"
        style="margin-bottom: 8px"
        @click="$emit('showModal', product)"
      >{{product.label}}</div>
      <div style="font-size: 14px; margin-bottom: 12px">{{type(product.selectType)}} {{size(product.selectSize)}}</div>
      <div class="flex justify-between align-center">
        <Count
          :value='quantity'
          @change="changeQuantity"
        />
        <div v-if="totalPrice" class="price">{{totalPrice}} ₽</div>
      </div>
    </div>
  </Card>
</template>
<script>
import defaultImage from '@/assets/images/pizza-placeholder.png'
export default {
  props: {
    product: Object,
    quantity: Number
  },
  data () {
    return {
      defaultImage: defaultImage
    }
  },
  computed: {
    totalPrice () {
      let priceModificators = 0
      this.product.modificators.forEach(modificator => {
        if (!modificator.disable) {
          priceModificators += modificator.price
        }
      });
      const result = this.product.selectSize.price + priceModificators
      return result
    }
  },
  methods: {
    image (image) {
      return image ?? this.defaultImage
    },
    type (type) {
      return `${type?.label}, ` ?? ''
    },
    size (size) {
      return `${size.size} см` ?? ''
    },
    changeQuantity (val) {
      if (val > this.product.quantity) {
        this.$store.commit('cart/add_product_to_cart', this.product)
      } else {
        this.$store.commit('cart/remove_product', this.product)
      }
    }
  }
}
</script>
