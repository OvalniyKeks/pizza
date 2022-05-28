<template>
  <a
    :href="`https://yandex.ru/maps/?text=${value}`"
    target="_blank"
    class="link"
    :style="`color:${color}`"
    v-bind="$attrs"
  >
    {{ value }}
  </a>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number]
    },
    color: String
  }
}
</script>
