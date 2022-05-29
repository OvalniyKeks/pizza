<template>
  <div class="sale-slide">
    <div
      class="sale-slide__inner"
      :style="`background-image: url(${sale.image}); background-size: cover` "
    >
      <div
        class="sale-slide__title"
        v-html="sale.label"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sale: Object
  }
}
</script>
