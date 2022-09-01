<template>
  <div
    class="input-wrapper"
    ref="inputwrapper"
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
      <input
        class="input"
        ref="input"
        :type="type"
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
    type: {
      type: String,
      required: false,
      default: 'text'
    },
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
    backlight: Boolean
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
    }
  },
  methods: {
    // setPrefixPadding () {
    //   console.log('awdwa')
    //   const width = this.$refs.prefix.clientWidth
    //   this.$refs.input.style.paddingLeft = `${width + 24}px`
    // },
    // setSuffixPadding () {
    //   console.log('awdwa')
    //   const width = this.$refs.suffix.clientWidth
    //   this.$refs.input.style.paddingRight = `${width}px`
    // },
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
    },
    setFocusHandler (val) {
      this.$refs.input.focus()

      if (val) {
        this.isFocus = true
      } else {
        this.isFocus = false
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
    },
    backlight (val) {
      this.setFocusHandler(val)
    }
  }
}
</script>
