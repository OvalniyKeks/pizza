<template>
  <div class="count" :style="`height: ${height}`">
    <Button
      width='26px'
      height='100%'
      center
      @click="minus"
    >-</Button>

    {{value}}

    <Button
      width='26px'
      height='100%'
      center
      @click="plus"
    >+</Button>
  </div>
</template>
<script>
export default {
  props: {
    value: Number,
    min: Number,
    max: Number,

    height: String
  },
  methods: {
    minus () {
      let min = this.min ?? 0

      if (this.value - 1 < min) {
        return
      }
      const result = this.value - 1

      this.$emit('input', result)
      this.isChange(result)
    },
    plus () {
      if (this.max && this.value + 1 > this.max) {
        return
      }

      const result = this.value + 1

      this.$emit('input', result)
      this.isChange(result)
    },
    isChange (val) {
      this.$emit('change', val)
    }
  }
}
</script>
