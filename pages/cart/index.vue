<template>
  <div
    class="container cart"
    style="max-width: 850px; margin: auto"
  >
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

    <Section class="m-mb-lg">
      <SectionTitle size='24px'>
        О вас
      </SectionTitle>

      <div class="flex align-center justify-between">
        <Input
          name="name"
          placeholder="Алексей"
          label='Имя*'
        />
        <Input
          name="phone"
          placeholder="+7"
          label='Номер телефона*'
          v-mask="'+7 (###) ###-##-##'"
          type="tel"
          autocomplete
        />
        <Input
          name="email"
          placeholder="mail@gmail.com"
          label='Почта'
          type="email"
          autocomplete
        />
      </div>

    </Section>

    <HelpersHr />

    <Section>
      <div class="flex align-center justify-between">
        <SectionTitle size='24px'>
          Доставка
        </SectionTitle>
        <Tabs
          :tabs='typesDelivery'
          :start-value='typeDelivery'
          class="m-mb-sm w-100"
          style="max-width: 350px"
        />
      </div>

      <Input
        name="street"
        placeholder="Пушкина"
        label='Улица*'
        autocomplete-custom-text="address-line1"
      />

      <div class="flex align-center justify-between m-mt-sm">
        <Input
          name="home"
          placeholder="1а"
          label='Дом'
          style="max-width: 154px"
        />
        <Input
          name="entity"
          placeholder="1"
          label='Подьезд'
          style="max-width: 154px"
        />
        <Input
          name="floor"
          placeholder="2"
          label='Этаж'
          style="max-width: 154px"
        />
        <Input
          name="flat"
          placeholder="3"
          label='Квартира'
          style="max-width: 154px"
        />
        <Input
          name="code"
          placeholder="0000"
          label='Домофон'
          style="max-width: 154px"
        />
      </div>

      <div>
        <Radio/>
      </div>

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

      promocode: '',
      typeDelivery: { id: 0, label: 'Доставка' },
      typesDelivery: [{ id: 0, label: 'Доставка' }, { id: 1, label: 'Самовывоз' }]
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
