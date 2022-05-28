<template>
  <div
    class="btn"
    @click="$emit('click', $event)"
    :class="{'btn-orange': orange, 'btn-transparent': transparent}"
    :style="`width:${width}; min-width: ${width}`"
    v-wave="optionsWave ? optionsWave : optionsDefault"
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
    width: String
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
    }
  }
}
</script>
