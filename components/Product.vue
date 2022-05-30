<template>
  <Card class="product-main">
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
    <img
      :src="product.image ? product.image : placeholderPizza"
      alt=""
    >
    <div class="m-ma-md">
      <div class="title link">{{product.label}}</div>
      <div class="description">{{product.description}}</div>
      <div class="flex align-center justify-between">
        <Button
          orange
          height='48px'
        >
          Выбрать
        </Button>
        <div class="price">от {{fromPrice}} ₽</div>
      </div>
    </div>
  </Card>
</template>
<script>
import placeholderPizza from '../assets/images/pizza-placeholder.png'
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
    }
  }
}
</script>
