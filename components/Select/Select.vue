<template>
  <div
    class="select"
    :style="`${setWidth}`"
    @click="dropdown = !dropdown"
    @mouseleave="dropdown = false"
  >
    <div
      v-if="label"
      class="label"
      ref="label"
    >
      {{label}}
    </div>
    <div class="select-head">
      <input
        :value='currValue'
        :placeholder="placeholder"
        readonly
      />
      <HelpersArrow
        :value='dropdown'
        class="select-arrow"
        color='#A5A5A5'
      />
    </div>

    <transition name="modal-fade-center">
      <div
        class="select-dropdown"
        v-if="dropdown"
      >
        <div
          class="select-list"
          v-for="(item, i) of list"
          :key="`${i}`"
        >
          <div
            class="select-item"
            @click="setOption(item)"
          >{{option(item)}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    value: [String, Object, Number],
    list: Array,
    placeholder: String,
    width: String,
    label: String
  },
  data () {
    return {
      dropdown: false
    }
  },
  computed: {
    currValue () {
      if (this.value && this.value.label) {
        return this.value.label
      }
      return this.value
    },
    setWidth () {
      if (!this.width) {
        return ''
      }
      return `width: ${this.width}; max-width: ${this.width}`
    }
  },
  methods: {
    option (item) {
      if (item.label) {
        return item.label
      }
      return item
    },
    setOption (item) {
      this.$emit('input', item)
    }
  }
}
</script>
