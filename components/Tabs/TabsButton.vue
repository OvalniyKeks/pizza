<template>
  <div
    class="tab"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
}
</script>
