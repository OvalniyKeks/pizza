<template>
  <div
    class="btn"
    @click="$emit('click', $event)"
    :class="{'btn-orange': orange, 'btn-transparent': transparent, 'btn-bordered': bordered}"
    :style="`width:${width}; min-width: ${width}; ${setHeight}`"
    v-wave="optionsWave ? optionsWave : optionsDefault"
    :href='to'
    v-smooth-scroll
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    orange: Boolean,
    transparent: Boolean,
    optionsWave: Object,
    width: String,
    height: String,
    to: String,
    bordered: Boolean
  },
  computed: {
    optionsDefault () {
      return {
        color: 'currentColor',
        easing: 'ease-out',
        duration: 0.4,
        dissolveDuration: 0.15,
        initialOpacity: 0.2,
        finalOpacity: 0.1,
        cancellationPeriod: 75,
        trigger: 'auto',
        tagName: 'div'
      }
    },
    setHeight () {
      if (this.height) {
        return `height: ${this.height}; padding-top: 0; padding-bottom: 0`
      }
      return ''
    }
  }
}
</script>
