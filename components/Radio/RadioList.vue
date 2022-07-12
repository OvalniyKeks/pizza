<template>
  <div
    class="radio-list__wrapper"
    v-if="list.length > 0"
  >
    <div
      v-if="label"
      class="label"
    >{{label}}</div>
    <div class="radio-list">
      <Radio
        v-for="(radio, i) of list"
        :key="`radio-${i}`"
        :radio='radio'
        :value='value'
        @input="$emit('input', radio)"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: [String, Object],
    list: Array,
    label: String
  }
}
</script>
