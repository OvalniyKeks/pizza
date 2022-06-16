<template>
  <div
    class="card"
    :style="`padding: ${padding}`"
    @click="$emit('click', $event)"
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
