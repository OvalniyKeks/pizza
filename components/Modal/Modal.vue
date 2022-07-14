<template>
  <Portal to="modal">
    <transition :name="`modal-fade-${align}`">
      <ModalLayout
        v-if="value"
        @click.self="$emit('input', false)"
      >
        <div
          class="modal"
          v-touch:swipe.bottom='closeModalSwipe'
          :class="`modal-${align}`"
          @scroll='setCurrScrollModal'
        >
          <slot></slot>
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
  },
  data() {
    return {
      currScroll: 0
    }
  },
  methods: {
    closeModalSwipe () {
      if (this.currScroll <= 0) {
        this.$emit('input', false)
      }
    },
    setCurrScrollModal (e) {
      this.currScroll = e.target.scrollTop
    }
  },
  watch: {
    value (val) {
      if (val) {
        document.body.style.overflow = "hidden"
        document.querySelector('.layout').style.overflow = "hidden"

        if (this.align === 'center') {
          const header = document.documentElement.querySelector('.header')
          header.style.zIndex = 1
        }
      } else {
        document.body.style.overflow = ""
        document.querySelector('.layout').style.overflow = ""

        if (this.align === 'center') {
          const header = document.documentElement.querySelector('.header')
          header.style.zIndex = 110
        }
      }

    }
  }
}
</script>
