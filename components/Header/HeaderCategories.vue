<template>
  <div class="header-categories">
    <div class="header-category">
      
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    categories () {
      return this.$store.state.products.categories
    }
  }
}
</script>
