<template>
  <div class="cart-modal">
    <div class="container w-100">
      <div class="title m-mb-sm">Ваш заказ</div>
    </div>

    <div
      class="container items"
      v-if="products && products.length > 0"
    >
      <ProductModalCart
        v-for="(product, i) of products"
        :key="`product-in-cart-${i}`"
        :product='product'
        :quantity='product.quantity'
        @showModal='showModalProduct'
      />
    </div>

    <div class="total">
      <HelpersHr />
      <div class="total-inner flex align-center justify-between">
        <div class="title">Итого: {{currPrice}} ₽</div>
        <Button
          height='48px'
          orange
          :disabled='disabledCheckoutButton'
          @click="checkoutOrder"
        >
          Оформить заказ
        </Button>
      </div>
    </div>
    <Modal
      v-model="isModalProduct"
      align='center'
    >
      <ProductModal
        v-model="isModalProduct"
        :product='isModalProductData'
      />
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isModalProduct: false,
      isModalProductData: null
    }
  },
  computed: {
    currPrice () {
      return this.$store.getters['cart/currPrice']
    },
    products () {
      return this.$store.state.cart.products
    },
    disabledCheckoutButton () {
      if (this.currPrice == 0) {
        return true
      }
      return false
    }
  },
  methods: {
    checkoutOrder () {
      if (this.disabledCheckoutButton) {
        return
      }
      this.$emit('input', false)
      this.$router.push('/cart')
    },
    showModalProduct (product) {
      this.isModalProductData = product
      this.isModalProduct = true
    }
  },
  watch: {
    products (val) {
      if (val && val.length === 0) {
        this.$emit('input', false)
      }
    }
  }
}
</script>
