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
      <client-only>
        <VueDatePicker
          v-model="date"
          format="DD.MM.YYYY"
        >

          <template #activator="{ date }">
            <div
              class="input datepicker"
              ref="activator"
            >
              {{ date }}
            </div>
          </template>
        </VueDatePicker>
      </client-only>
      <div
        class="suffix"
        style="padding-right: 16px"
        ref="suffix"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3412 1.77594H13.3368V0.938468C13.3368 0.697311 13.1492 0.5 12.92 0.5C12.6908 0.5 12.5032 0.697311 12.5032 0.938468V1.77594H8.41885V0.938468C8.41885 0.697311 8.2313 0.5 8.00208 0.5C7.77285 0.5 7.5853 0.697311 7.5853 0.938468V1.77594H3.45923V0.938468C3.45923 0.697311 3.27168 0.5 3.04246 0.5C2.81323 0.5 2.62568 0.697311 2.62568 0.938468V1.77594H1.66293C0.746027 1.77594 0 2.58711 0 3.55174V13.7461C0 14.7151 0.741859 15.5 1.66293 15.5H14.3371C15.2581 15.5 16 14.7151 16 13.7505V3.55174C16.0042 2.58711 15.2581 1.77594 14.3412 1.77594ZM15.1706 13.7461C15.1706 14.2284 14.8038 14.6187 14.3454 14.6231H14.3412H1.66293C1.20448 14.6231 0.833549 14.2328 0.833549 13.7505V13.7461V3.55174C0.833549 3.06504 1.20448 2.65288 1.66293 2.65288H2.62568V3.28866C2.62568 3.52982 2.81323 3.72713 3.04246 3.72713C3.27168 3.72713 3.45923 3.52982 3.45923 3.28866V2.65288H7.5853V3.28866C7.5853 3.52982 7.77285 3.72713 8.00208 3.72713C8.2313 3.72713 8.41885 3.52982 8.41885 3.28866V2.65288H12.5032V3.28866C12.5032 3.52982 12.6908 3.72713 12.92 3.72713C13.1492 3.72713 13.3368 3.52982 13.3368 3.28866V2.65288H14.3412C14.8038 2.65288 15.1706 3.06942 15.1706 3.55174V13.7461Z"
            fill="#A5A5A5"
          />
        </svg>

      </div>
    </div>
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
    autocomplete: {
      type: Boolean,
      required: false,
      default: false
    },
    autocompleteCustomText: String,
    name: String,
    placeholder: String,
    label: String
  },
  data () {
    return {
      date: Date.now(),
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
    setPrefixPadding () {
      const width = this.$refs.prefix.clientWidth
      this.$refs.input.style.paddingLeft = `${width + 24}px`
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
    convertUnixToDate (newDate) {
      let date = newDate
      if (!date) {
        date = new Date()
      }
      return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`
    },
    formatDate (newDate) {
      newDate = newDate.replace(/-/gi, '.').split('.').reverse().join('.')
      console.log(newDate)
      return newDate
    }
  },
  watch: {
    date (val) {
      if (val) {
        if (typeof val === 'number') {
          this.$emit('input', this.convertUnixToDate()) 
        }
        this.$emit('input', this.formatDate(val))
      }
    }
  }
}
</script>
