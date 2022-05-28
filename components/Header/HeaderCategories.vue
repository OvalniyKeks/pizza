<template>
  <div class="header-categories">
    <div
      v-for="(cat, i) of categories"
      :key="`header-category-${i}`"
      class="header-category link"
    >
      {{cat.label}}
    </div>
    <div class="header-category link">
      Другое
      <div class="arrow-wrapper">
        <div class="arrow"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    categories () {
      return this.$store.state.interface.categories
    }
  }
}
</script>
