<template>
  <div class="cart-modal">
    <div class="container w-100">
      <div class="title m-mb-sm">Ваш заказ</div>
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
  </div>
</template>
<script>
export default {
  computed: {
    currPrice () {
      return this.$store.getters['cart/currPrice']
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
      console.log('awdawd')
    }
  },
}
</script>
