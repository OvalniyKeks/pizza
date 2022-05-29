<template>
  <div
    v-show="value"
    class="dropdown-menu"
    @mouseleave="close"
    :ref="`${id}`"
  >
    <div class="dropdown-inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: Boolean,
    paddingTop: [Number, String]
  },
  created () {
    this.id = Date.now()
  },
  mounted () {
    this.setCenterPosition()
  },
  data () {
    return {
      id: null
    }
  },
  methods: {
    setCenterPosition () {
      // if (!this.value) {
      //   return
      // }
      const currEl = this.$refs[this.id]
      const parentCoord = currEl.parentNode.getBoundingClientRect()
      const targetCenter = parentCoord.left - parentCoord.width
      currEl.style.left = targetCenter + 'px'
      currEl.style.top = parentCoord.top + (this.paddingTop ?? 30) + 'px'
    },
    close () {
      this.$emit('input', false)
    }
  }
}
</script>
