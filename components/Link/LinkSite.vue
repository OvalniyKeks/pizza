<template>
  <a
    :href="value"
    class="link"
    target="_blank"
    v-bind="$attrs"
  >
    {{ titleLink }}
  </a>
</template>
<script>
export default {
  props: {
    value: String,
    title: String,
    size: String
  },
  computed: {
    titleLink () {
      if (this.title) {
        return this.title
      }
      if (this.size) {
        let string = this.value
        string = string.slice(0, this.size - 1)
        if (string.length < this.size - 1) {
          return string
        } else {
          return string + '...'
        }
      }
      return this.value
    }
  }
}
</script>
