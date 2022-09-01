<template>
  <div
    class="input-wrapper"
    ref="inputwrapper"
    :style="`${setHeight}; ${setWidth}`"
  >
    <div
      v-if="label"
      class="label"
      ref="label"
    >
      {{label}}
    </div>
    <div class="input-inner">
      <div
        class="prefix"
        ref="prefix"
      >
        <slot name="prefix"></slot>
      </div>
      <textarea
        :style="`resize: none`"
        class="input"
        ref="input"
        type="textarea"
        :name="name"
        :placeholder="placeholder"
        :min='min'
        :max='max'
        v-model="text"
        :autocomplete="autocompleteProp"
        @focus="setLabelBacklight"
        @blur="setLabelBacklight"
      />
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
  </div>
</template>
<script>
export default {
  mounted () {
    if (!this.$slots?.prefix) {
      this.$refs.prefix.hidden = true
    }
    if (!this.$slots?.suffix) {
      this.$refs.suffix.hidden = true
    }
  },
  props: {
    autocomplete: {
      type: Boolean,
      required: false,
      default: false
    },
    autocompleteCustomText: String,
    name: String,
    placeholder: String,
    label: String,
    address: Boolean,
    min: [String, Number],
    max: [String, Number],
    height: String,
    width: String
  },
  data () {
    return {
      text: '',
      showPrompt: false,
      isFocus: false
    }
  },
  computed: {
    autocompleteProp () {
      return this.autocompleteCustomText ?? (this.autocomplete ? 'on' : 'off')
    },
    setHeight () {
      if (!this.height) {
        return ''
      }
      return `max-height: ${this.height}; height: ${this.height}`
    },
    setWidth () {
      if (!this.width) {
        return ''
      }
      return `width: ${this.width}; max-width: ${this.width}`
    }
  },
  methods: {
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
    },
    setLabelBacklight () {
      if (!this.label) {
        return
      }

      this.isFocus = !this.isFocus
      if (this.isFocus) {
        this.$refs.label.style.color = `#FF7010`
      } else {
        this.$refs.label.style.color = ``
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
      } else {
        this.$emit('input', val)
      }
    }
  }
}
</script>
