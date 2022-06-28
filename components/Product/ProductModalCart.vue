<template>
  <Card
    class="product-cart_modal m-mb-md flex"
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
      <div style="font-size: 14px; margin-bottom: 12px">{{type(product.selectType)}} {{size(product.selectPrice)}}</div>
      <div class="flex justify-between align-center">
        <Count
          :value='quantity'
          @change="changeQuantity"
        />
        <div class="price">{{product.selectPrice.price}} ₽</div>
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
      if (val === 0) {
        this.$store.commit('cart/remove_product', { id: this.product.id })
        this.updateProduct(0)
        return
      }
      this.$store.commit('cart/change_quantity_product', { id: this.product.id, quantity: val })
      this.updateProduct(val)
    },
    updateProduct (val) {
      const commit = {
        cat_id: this.product.cat_id,
        id: this.product.id,
        key: 'quantity',
        value: val
      }
      this.$store.commit('products/set_product_change_key', commit)
    }
  }
}
</script>
