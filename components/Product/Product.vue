<template>
  <Card
    class="product-main"
    @click="$emit('click', $event)"
  >
    <div class="status">
      <div
        v-if="product.new"
        class="status-item new"
      >New</div>
      <div
        v-if="product.top"
        class="status-item top"
      >Хит</div>
    </div>
    <img :src="image(product.image)">
    <div class="m-ma-md">
      <div class="title link">{{product.label}}</div>
      <div class="description">{{product.description}}</div>
      <div class="flex align-center justify-between">
        <div
          style="height: 48px"
          @click.stop=""
        >
          <transition name="product-count">
            <Count
              v-if="product.quantity"
              :value='product.quantity'
              @change="changeQuantity"
              height='100%'
            />
            <Button
              v-else
              @click.stop="addProduct"
              orange
              height='100%'
            >
              Выбрать
            </Button>
          </transition>
        </div>
        <div class="price">от {{fromPrice}} ₽</div>
      </div>
    </div>
  </Card>
</template>
<script>
import placeholderPizza from '../../assets/images/pizza-placeholder.png'
export default {
  props: {
    product: Object
  },
  data () {
    return {
      placeholderPizza
    }
  },
  computed: {
    fromPrice () {
      return this.product?.price[0].price
    },
  },
  methods: {
    image (image) {
      if (image) return image
      return placeholderPizza
    },
    changeQuantity (val) {
      // console.log(val)
      if (val === 0) {
        this.$store.commit('cart/remove_product', { id: this.product.id })
        this.updateProduct(0)
        return
      }
      this.$store.commit('cart/change_quantity_product', { id: this.product.id, quantity: val })
      this.updateProduct(val)
    },
    addProduct () {
      const product = JSON.parse(JSON.stringify(this.product))
      product.selectPrice = product.price[0] //Доделать
      product.selectType = product.type[0] //Доделать
      product.quantity = 1
      this.$store.commit('cart/add_cart', product)
      this.updateProduct(1)
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
