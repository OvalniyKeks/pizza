<template>
  <Card
    class="product-card--md m-mb-md flex align-center justify-between"
    padding='16px'
  >
    <div class="flex align-center">
      <img
        :src="image(product.image)"
        class="image m-mr-sm"
      >
      <div>
        <div
          class="title link"
          style="margin-bottom: 8px"
          @click="$emit('showModal', product)"
        >{{product.label}}</div>
        <div style="font-size: 16px; margin-bottom: 12px">{{type(product.selectType)}} {{size(product.selectSize)}}</div>
      </div>
    </div>
    <div class="flex align-center">
      <Count
        :value='product.quantity'
        @change="changeQuantity"
      />
      <div
        v-if="totalPrice"
        class="price"
      >{{totalPrice}} ₽</div>
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
