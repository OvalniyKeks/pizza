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
      <SectionTitle
        size='24px'
        class="m-mb-xs"
      >
        О вас
      </SectionTitle>

      <div class="flex align-center justify-between">
        <Input
          name="name"
          placeholder="Алексей"
          label='Имя*'
          v-model="contacts.name"
        />
        <Input
          name="phone"
          placeholder="+7"
          label='Номер телефона*'
          v-mask="'+7 (###) ###-##-##'"
          type="tel"
          autocomplete
          v-model="contacts.phone"
        />
        <Input
          name="email"
          placeholder="mail@gmail.com"
          label='Почта'
          type="email"
          autocomplete
          v-model="contacts.email"
        />
      </div>

    </Section>

    <HelpersHr />

    <Section class="m-mb-lg m-mt-md">
      <div class="flex align-center justify-between m-mb-xs">
        <SectionTitle size='24px'>
          Доставка
        </SectionTitle>
        <Tabs
          v-model="typeDelivery"
          :tabs='typesDelivery'
          :start-value='typeDelivery'
          class="m-mb-sm w-100"
          style="max-width: 350px"
        />
      </div>

      <div v-if="typeDelivery.id == 0">
        <Input
          name="street"
          placeholder="Пушкина"
          label='Улица*'
          autocomplete-custom-text="address-line1"
          v-model="address.street"
        />
        <div class="flex align-center justify-between m-mt-sm">
          <Input
            name="home"
            placeholder="1а"
            label='Дом'
            style="max-width: 154px"
            v-model="address.home"
          />
          <Input
            name="entity"
            placeholder="1"
            label='Подьезд'
            style="max-width: 154px"
            v-model="address.entry"
          />
          <Input
            name="floor"
            placeholder="2"
            label='Этаж'
            style="max-width: 154px"
            v-model="address.floor"
          />
          <Input
            name="flat"
            placeholder="3"
            label='Квартира'
            style="max-width: 154px"
            v-model="address.flat"
          />
          <Input
            name="code"
            placeholder="0000"
            label='Домофон'
            style="max-width: 154px"
            v-model="address.code"
          />
        </div>
      </div>

      <Select
        v-else
        v-model="selectRestaraunt"
        :list='restaurantList'
        placeholder='Выберите ресторан'
        label='Ресторан*'
      />

      <div class="subtitle m-mt-sm">Когда выполнить заказ?</div>
      <div class="flex align-center m-mt-sm">
        <RadioList
          :list='radioTimeList'
          v-model="selectRadioTime"
          class="m-mr-sm"
        />
        <InputDate
          v-if="selectRadioTime.id == 1"
          v-model="dateDelivery"
          placeholder="Дата"
          class="m-mr-sm"
        />
        <Select
          v-if="selectRadioTime.id == 1"
          v-model="timeDelivery"
          :list='timeDeliveryList'
          placeholder='Время'
          width='160px'
        />
      </div>

    </Section>

    <HelpersHr />

    <Section class="m-mb-lg">
      <SectionTitle
        size='24px'
        class="m-mb-xs"
      >
        Оплата
      </SectionTitle>

      <RadioList
        :list='payTypeList'
        v-model="selectTypePay"
        class="m-mr-sm"
      />
    </Section>

    <HelpersHr />

    <Section
      class="m-mb-lg"
      v-if="selectTypePay.id === 0"
    >
      <SectionTitle
        size='24px'
        class="m-mb-xs"
      >
        Сдача
      </SectionTitle>

      <div class="flex align-center">
        <RadioList
          :list='tipList'
          v-model="selectTip"
          class="m-mr-sm"
        />
        <Input
          name="tip"
          type="number"
          placeholder="0"
          v-model="tip"
          min="0"
          style="max-width: 160px; width: 100%"
        >
        <template v-slot:suffix>
          <div
            class="subtitle"
            style="width: 26px"
          >₽</div>
        </template>
        </Input>
      </div>
    </Section>

    <HelpersHr />

    <Section class="m-mb-lg">
      <SectionTitle
        size='24px'
        class="m-mb-xs"
      >
        Комментарий
      </SectionTitle>

      <Textarea
        v-model="comment"
        placeholder="Есть уточнения?"
        height='200px'
      />
    </Section>

    <HelpersHr />

    <div class="flex align-center justify-between m-mt-md total">
      <div class="total-price">Итого: {{totalPrice}} ₽</div>
      <Button
        orange
        height='48px'
        @click="setOrder"
        :loading='loading'
      >Оформить заказ</Button>
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
  data () {
    return {
      isModalProduct: false,
      isModalProductData: null,

      promocode: '',

      contacts: {
        name: '',
        phone: null,
        email: null
      },
      address: {
        street: '',
        home: '',
        entry: '',
        floor: '',
        flat: '',
        code: ''
      },
      typeDelivery: { id: 0, label: 'Доставка' },
      typesDelivery: [{ id: 0, label: 'Доставка' }, { id: 1, label: 'Самовывоз' }],
      dateDelivery: null,
      timeDelivery: null,

      radioTimeList: [
        {
          id: 0,
          label: 'Как можно скорее'
        },
        {
          id: 1,
          label: 'По времени'
        },
      ],
      selectRadioTime: {
        id: 0,
        label: 'Как можно скорее'
      },

      timeDeliveryList: [
        {
          value: 0,
          label: '10:00'
        },
        {
          value: 0,
          label: '11:00'
        },
        {
          value: 0,
          label: '12:00'
        },
      ],

      payTypeList: [
        {
          id: 0,
          label: 'Наличными'
        },
        {
          id: 1,
          label: 'Картой'
        },
        {
          id: 2,
          label: 'Apple Pay'
        },
      ],
      selectTypePay: {
        id: 0,
        label: 'Наличными'
      },

      tipList: [
        {
          id: 0,
          label: 'Без сдачи'
        },
        {
          id: 1,
          label: 'Сдача с'
        },
      ],
      selectTip: {
        id: 0,
        label: 'Без сдачи'
      },
      tip: 0,

      restaurantList: [
        {
          id: 0,
          label: 'ул. Московская 99'
        },
        {
          id: 1,
          label: 'ул. Ленина 32'
        },
      ],
      selectRestaraunt: null,

      comment: '',

      loading: false
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
    },
    setDataForOrder () {
      const data = {}

      data.products = this.setCartsDataForOrder()

      data.contacts = this.contacts
      data.contacts.phone = this.$api.convertStringToNumber(this.contacts.phone)
      data.contacts = this.$api.jsonStringify(data.contacts)

      data.type = this.typeDelivery.label

      data.restaurant = this.selectRestaraunt

      data.address = this.$api.jsonStringify(this.address)

      data.pay = this.$api.jsonStringify(this.selectTypePay)

      data.delivery_time = {
        type: this.selectRadioTime,
        date: this.dateDelivery,
        time: this.timeDelivery
      }

      data.delivery_time = this.$api.jsonStringify(data.delivery_time)

      data.comment = this.comment

      if (this.selectTypePay.id === 0) {
        data.tip = this.tip
      }

      return data
    },
    setCartsDataForOrder () {
      const cart = []
      for (const item of this.carts) {
        console.log(item)
        const obj = {
          id: item.id,
          label: item.label,
          image: item.image,
          compound: item.compound.filter(item => !item.disable),
          modificators: item.modificators.filter(item => !item.disable),
          quantity: item.quantity,
          size: item.selectSize,
          type: item.selectType
        }
        cart.push(obj)
      }
      return this.$api.jsonStringify(cart)
    },
    setOrder () {
      this.loading = true
      // const data = this.setDataForOrder()

      // this.$axios.post('/order/', data)
      //   .then(res => {
      //     this.$store.commit('cart/clear_cart')
      //     this.$router.push(`/order/${res.data.data.id}`)
      //   })
      //   .catch(e => {
      //     console.log(e)
      //   })
      //   .finally(() => {
      //     this.loading = false
      //   })

    }
  }
}
</script>
