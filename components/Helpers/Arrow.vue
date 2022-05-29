<template>
  <div class="arrow-wrapper">
    <div
      class="arrow"
      :class="{'active': value}"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    value: Boolean
  }
}
</script>
