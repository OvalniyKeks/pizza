<template>
  <div
    class="input-wrapper"
    ref="inputwrapper"
  >
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
      v-model="text"
      autocomplete="off"
    >
    <div
      class="suffix"
      ref="suffix"
    >
      <slot name="suffix"></slot>
    </div>
    <InputPromptAddress
      v-if="showPrompt"
      ref="prompt"
      @close='closePrompt'
      v-model="text"
    />
  </div>
</template>
<script>
export default {
  mounted () {
    if (this.$slots?.prefix) {
      this.setPrefixPadding()
    }
    if (this.$slots?.suffix) {
      this.setSuffixPadding()
    }
  },
  props: {
    name: String,
    placeholder: String,
    address: Boolean
  },
  data () {
    return {
      text: '',
      showPrompt: false
    }
  },
  methods: {
    setPrefixPadding () {
      const width = this.$refs.prefix.clientWidth
      this.$refs.input.style.paddingLeft = `${width + 24}px`
    },
    setSuffixPadding () {
      const width = this.$refs.suffix.clientWidth
      this.$refs.input.style.paddingRight = `${width + 24}px`
    },
    closePrompt () {
      setTimeout(() => {
        this.showPrompt = false
      }, 10);
    },
    setPromptMargin () {
      if (this.showPrompt) {
        const height = this.$refs.inputwrapper.clientHeight
        this.$refs.prompt.$el.style.top = `${height + 5}px`
      }
    }
  },
  watch: {
    text (val) {
      if (val && this.address) {
        this.showPrompt = true
        setTimeout(() => {
          this.setPromptMargin()
        }, 10);
      }
    }
  }
}
</script>
