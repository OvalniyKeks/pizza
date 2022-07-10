<template>
  <div class="section-title" :style="`${setFontSize}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    size: String
  },
  computed: {
    setFontSize () {
      if (this.size) {
        return `font-size: ${this.size}`
      }
      return ''
    }
  }
}
</script>
