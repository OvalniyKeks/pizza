<template>
  <div
    class="layout-modal"
    @click.self="$emit('click', $event)"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {

}
</script>
