<template>
  <div
    v-if="radio"
    class="radio"
    :class="{'active': value.label === radio.label}"
    @change="$emit('input', radio)"
  >
    <label>
      <input
        type="radio"
        :value='radio'
        :checked="value == radio"
      >
    </label>
    <span v-if="radio.label">{{radio.label}}</span>
  </div>
</template>
<script>
export default {
  props: {
    radio: Object,
    value: [String, Object]
  }
}
</script>
