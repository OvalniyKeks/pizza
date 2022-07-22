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
  data () {
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
    },
    changeZIndex (val) {
      const widthWindow = document.documentElement.clientWidth
      if (widthWindow > 1024) {
        return
      }

      const header = document.documentElement.querySelector('.header')
      if (val && this.align === 'center') {
        header.style.zIndex = 1
      } else {
        header.style.zIndex = 110
      }

    }
  },
  watch: {
    value (val) {
      if (val) {
        document.body.style.overflow = "hidden"
        document.querySelector('.layout').style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
        document.querySelector('.layout').style.overflow = ""
      }
      this.changeZIndex(val)
    }
  }
}
</script>
