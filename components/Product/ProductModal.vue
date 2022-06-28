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
    <div class="w-50">
      <div class="title m-mb-sm">{{localProduct.label}}</div>
      <div class="flex align-center justify-between m-mb-md">
        <ProductCompound
          v-for="(elCompound, i) of localProduct.compound"
          :key="`elCompound-modal-${i}`"
          :product='elCompound'
          @disable='toggleElCompound'
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
        <ProductCompound
          v-for="(elCompound, i) of localProduct.modificators"
          :key="`elCompound-modal-${i}`"
          :product='elCompound'
          @disable='toggleElCompound'
        />
      </div>
      <div class="flex align-center justify-between">
        <div>Итого:</div>
        <div style="height: 48px">
          <transition name="product-count">
            <Count
              v-if="product.quantity"
              :value='product.quantity'
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
    <ModalClose @click="$emit('input', false)" />
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
      startSize: null
    }
  },
  created () {
    this.localProduct = JSON.parse(JSON.stringify(this.product))
    if (this.localProduct.selectType) {
      this.startType = this.localProduct.selectType
    }
    if (this.localProduct.selectPrice) {
      this.startSize = this.localProduct.selectPrice
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
    }
  },
  methods: {
    toggleElCompound (el) {
      const product = this.localProduct
      const elCompound = product.compound.find(item => item.id === el.id)
      elCompound.disable = !elCompound.disable
    },
    image (image) {
      return image ?? this.defaultImage
    },
    setSizes (size) {
      this.localProduct.selectPrice = size
      this.updateProductInCart()
      this.updateProduct(size, 'selectPrice')
    },
    setTypes (type) {
      this.localProduct.selectType = type
      this.updateProductInCart()
      this.updateProduct(type, 'selectType')
    },
    changeQuantity (val) {
      if (val === 0) {
        this.$store.commit('cart/remove_product', { id: this.product.id })
        this.updateProduct(0, 'quantity')
        return
      }
      this.$store.commit('cart/change_quantity_product', { id: this.product.id, quantity: val })
      this.updateProduct(val, 'quantity')
    },
    updateProduct (val, key) {
      const commit = {
        cat_id: this.localProduct.cat_id,
        id: this.localProduct.id,
        key: key,
        value: val
      }
      this.$store.commit('products/set_product_change_key', commit)
    },
    updateProductInCart () {
      if (this.localProduct.quantity > 0) {
        this.$store.commit('cart/change_product', this.localProduct)
      }
    },
    addProduct () {
      this.localProduct.selectType = this.localProduct.selectType ?? this.localProduct.type[0]
      this.localProduct.selectPrice = this.localProduct.selectPrice ?? this.localProduct.price[0]

      this.localProduct.quantity = 1
      this.$store.commit('cart/add_cart', this.localProduct)
      this.updateProduct(1, 'quantity')
    }
  }
}
</script>
