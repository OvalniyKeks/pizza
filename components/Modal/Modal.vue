<template>
  <Portal to="modal">
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
          <!-- <Button
            class="modal-close"
            @click="$emit('input', false)"
          ></Button> -->
        </div>
      </ModalLayout>
    </transition>
  </Portal>
</template>
<script>
export default {
  props: {
    value: Boolean,
    align: String
  }
}
</script>
