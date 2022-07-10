<template>
  <div
    class="product-element"
    @click="$emit('click', $event)"
    :class="{'delete': product.disable}"
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
