<template>
  <div class="arrow-wrapper">
    <div
      class="arrow"
      :class="{'active': value}"
      :style="`${setColor}`"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    value: Boolean,
    color: String
  },
  computed: {
    setColor () {
      if (!this.color) {
        return ''
      }
      return `border-right: 1px solid ${this.color}; border-bottom: 1px solid ${this.color}`
    }
  }
}
</script>
