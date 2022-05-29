<template>
  <div class="input-wrapper">
    <div
      class="prefix"
      ref="prefix"
    >
      <slot name="prefix"></slot>
    </div>
    <input
      class="input"
      ref="input"
      type="text"
      :name="name"
      :id="name"
      :placeholder="placeholder"
    >
  </div>
</template>
<script>
export default {
  mounted () {
    if (this.$slots?.prefix) {
      this.setPrefixPadding()
    }
  },
  props: {
    name: String,
    placeholder: String
  },
  methods: {
    setPrefixPadding () {
      const width = this.$refs.prefix.clientWidth
      this.$refs.input.style.paddingLeft = `${width + 24}px`
    }
  }
}
</script>
