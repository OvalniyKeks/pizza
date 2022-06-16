<template>
  <div
    class="product-compound"
    :class="{'disable': product.disable}"
    @click="$emit('disable', product)"
  >
    <Button bordered>
      <img :src="product.icon">
    </Button>
    <div>{{product.label}}</div>
  </div>
</template>
<script>
export default {
  props: {
    product: Object
  }
}
</script>
