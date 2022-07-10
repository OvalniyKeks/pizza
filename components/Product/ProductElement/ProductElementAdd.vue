<template>
  <div
    class="product-element"
    @click="$emit('click', $event)"
    :class="{'add': !product.disable}"
  >
    <Button bordered>
      <img :src="product.icon">
    </Button>
    <div>{{product.label}}</div>
    <div class="primary-text bold">{{product.price}} &#8381;</div>
  </div>
</template>
<script>
export default {
  props: {
    product: Object
  }
}
</script>
