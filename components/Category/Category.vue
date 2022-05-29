<template>
  <Button
    class="category-slide"
    :to='`#${category.id}`'
  >
    <div>{{category.icon}}</div>
    <div>{{category.label}}</div>
  </Button>
</template>
<script>
export default {
  props: {
    category: Object
  }
}
</script>
