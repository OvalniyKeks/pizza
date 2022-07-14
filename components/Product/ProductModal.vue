<template>
  <div
    class="flex align-center justify-between product-modal"
    v-if="localProduct"
  >
    <img
      :src="image(localProduct.image)"
      class="w-50"
      style="max-width: 450px"
    >
    <div class="w-50 w-100-t">
      <div class="title m-mb-sm">{{localProduct.label}}</div>
      <div class="flex align-center justify-between m-mb-md">
        <ProductElementList
          v-model='localProduct.compound'
          @change="updateProduct"
          type='delete'
        />
      </div>
      <Tabs
        :tabs='types'
        :start-value='startType'
        @change="setTypes"
        class="m-mb-sm"
      ></Tabs>
      <Tabs
        :tabs='sizes'
        suffixTab='см'
        :start-value='startSize'
        @change="setSizes"
        class="m-mb-md"
      ></Tabs>
      <div class="subtitle m-mb-sm">Добавьте в пиццу</div>
      <div class="flex align-center justify-between m-mb-md">
        <ProductElementList
          v-model='localProduct.modificators'
          @change="updateProduct"
          type='add'
        />
      </div>
      <div class="flex align-center justify-between">
        <div class="total">Итого: {{totalPrice}} &#8381; <span class="total-weight">{{totalSize}}</span></div>
        <div style="height: 48px">
          <transition name="product-count">
            <Count
              v-if="localProduct.quantity"
              :value='localProduct.quantity'
              @change="changeQuantity"
              height='100%'
            />
            <Button
              v-else
              @click="addProduct"
              orange
              height='100%'
            >
              Добавить
            </Button>
          </transition>
        </div>
      </div>
    </div>
    <ModalClose @click="closeModal" />
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
      defaultImage: defaultImage,
      localProduct: null,
      startType: null,
      startSize: null,
      selectSize: null,

      isProductInCart: false
    }
  },
  created () {
    const checkProductInCart = this.$store.state.cart.carts.find(items => items.id == this.product.id)
    if (checkProductInCart) {
      this.isProductInCart = true
      this.localProduct = JSON.parse(JSON.stringify(checkProductInCart))
    } else {
      this.localProduct = JSON.parse(JSON.stringify(this.product))
    }

    this.selectSize = this.localProduct.price[0]

    if (this.localProduct.selectType) {
      this.startType = this.localProduct.selectType
    }
    if (this.localProduct.selectSize) {
      this.startSize = this.localProduct.selectSize
      this.selectSize = this.localProduct.selectSize
    }
  },
  computed: {
    types () {
      if (!this.localProduct?.type) return []
      return this.localProduct?.type
    },
    sizes () {
      if (!this.localProduct?.price) return []

      const prices = this.localProduct.price
      for (const price of prices) {
        price.label = price.size
      }
      return prices
    },
    selectModificators () {
      return this.localProduct.modificators.filter(item => !item.disable)
    },
    totalPrice () {
      const defaultPrice = this.localProduct.price[0]
      const currPrice = this.selectSize

      if (!currPrice?.price || !defaultPrice?.price) {
        return 0
      }

      let priceModificators = 0
      this.selectModificators.forEach(modificator => {
        priceModificators += modificator.price
      });

      let totalPrice = currPrice.price ?? defaultPrice.price

      return totalPrice + priceModificators
    },
    totalSize () {
      const defaultSize = this.localProduct.price[0]
      const currSize = this.selectSize
      return currSize?.weight ?? defaultSize?.weight
    }
  },
  methods: {
    closeModal () {
      this.$emit('input', false)
    },
    image (image) {
      return image ?? this.defaultImage
    },
    setSizes (size) {
      this.selectSize = size
      this.localProduct.selectSize = size
      this.updateProduct()
    },
    setTypes (type) {
      this.localProduct.selectType = type
      this.updateProduct()
    },
    changeQuantity (val) {
      if (val > this.localProduct.quantity) {
        this.$store.commit('cart/add_product_to_cart', this.localProduct)
        this.localProduct.quantity = val
      } else {
        this.$store.commit('cart/remove_product', this.localProduct)
        this.localProduct.quantity = val
      }
    },
    updateProduct () {
      if (!this.isProductInCart) {
        return
      }
      this.$store.commit('cart/update_product', this.localProduct)
    },
    addProduct () {
      this.localProduct.selectType = this.localProduct.selectType ?? this.localProduct.type[0]
      this.localProduct.selectSize = this.localProduct.selectSize ?? this.localProduct.price[0]

      this.localProduct.quantity = 1
      this.$store.commit('cart/add_product_to_cart', this.localProduct)
    }
  }
}
</script>
