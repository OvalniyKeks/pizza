<template>
  <div class="container cart" style="max-width: 850px; margin: auto">
    <Section>
      <SectionTitle class="m-mb-lg">
        Ваш заказ
      </SectionTitle>
      <ProductCardMD
        v-for="(product, i) of carts"
        :key="`product-in-cart-page-${i}`"
        :product='product'
        @showModal='showModalProduct'
      />
      <Card
        padding='16px 24px'
        class="flex align-center justify-between"
      >
        <div class="flex align-center">
          <Input
            name="promocode"
            placeholder="Промокод"
          >
            <template v-slot:suffix>
              <ButtonAction />
            </template>
          </Input>
        </div>
        <div class="total-price">Итого: {{totalPrice}} ₽</div>
      </Card>
    </Section>

    <Section>
      <SectionTitle size='24px'>
        О вас
      </SectionTitle>

      <form class="flex align-center justify-between">
        <Input placeholder="Алексей" label='Имя*'/>
        <Input placeholder="+7" label='Номер телефона*' v-mask="'+7 (###) ###-##-##'" type="tel" autocomplete/>
        <Input placeholder="mail@gmail.com" label='Почта' type="email" autocomplete/>
      </form>

    </Section>

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
  data () {
    return {
      isModalProduct: false,
      isModalProductData: null,

      promocode: ''
    }
  },
  computed: {
    carts () {
      return this.$store.state.cart.carts
    },
    totalPrice () {
      return this.$store.getters['cart/currPrice']
    },
  },
  methods: {
    showModalProduct (product) {
      this.isModalProductData = product
      this.isModalProduct = true
    }
  }
}
</script>
