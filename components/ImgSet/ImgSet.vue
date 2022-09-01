<template>
  <picture>
    <source
      v-for="(source, i) of srcSet"
      :key="`source-${i}`"
      :srcset="source.src"
      :type="source.type"
    >
    <img
      v-if="src"
      :src="src"
    >
  </picture>
</template>
<script>
export default {
  props: {
    src: String,
    srcSet: Array
  }
}
</script>
 