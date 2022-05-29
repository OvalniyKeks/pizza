<template>
  <div
    class="card"
    :style="`padding: ${padding}`"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    padding: String
  }
}
</script>
