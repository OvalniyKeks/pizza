<template>
  <Button
    class="category-slide"
    :to='`#${category._id}`'
    direction-content='content-col'
  >
    <ImgSet
      v-if="category.image"
      :src="category.image"
      alt=""
    />
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
