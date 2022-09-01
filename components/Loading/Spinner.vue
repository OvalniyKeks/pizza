<template >
  <div
    class="spinner"
    :width='width'
    :height='height'
  >
    <svg
      viewBox="0 0 50 50"
      :width='width'
      :height='height'
    >
      <circle
        class="path"
        cx="25"
        cy="25"
        r='20'
        fill="none"
        stroke-width="5"
        :stroke='color'
      ></circle>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    width: String,
    height: String,
    color: {
      type: String,
      default: '#fff'
    }
  }
}
</script>
<style lang="sass" scoped>
.spinner
  position: relative
  z-index: 2
  & svg
    animation: rotate 2s linear infinite
  & .path
    // stroke: hsl(210, 70, 75)
    stroke-linecap: round
    animation: dash 1.5s ease-in-out infinite

@keyframes rotate
  100%
    transform: rotate(360deg)

@keyframes dash
  0%
    stroke-dasharray: 1, 150
    stroke-dashoffset: 0

  50%
    stroke-dasharray: 90, 150
    stroke-dashoffset: -35

  100%
    stroke-dasharray: 90, 150
    stroke-dashoffset: -124
</style>
