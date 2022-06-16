<template>
  <transition :name="`modal-fade-${align}`">
    <ModalLayout
      v-if="value"
      @click.self="$emit('input', false)"
    >
      <div
        class="modal"
        :class="`modal-${align}`"
      >
        <slot></slot>
      </div>
    </ModalLayout>
  </transition>
</template>
<script>
export default {
  props: {
    value: Boolean,
    align: String
  }
}
</script>
