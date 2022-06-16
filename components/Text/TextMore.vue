<template>
  <div class="text-more">
    <div
      class="text-more__inner"
      :style="`height: ${height}; max-height: ${height}; max-width: ${width} `"
      :class="{'active': showMoreText}"
    >
      <slot></slot>
    </div>
    <div
      v-if="!showMoreText"
      class="text-more__btn link"
      @click="showMore"
    >{{buttonText ? buttonText : defaultButtonText}}</div>
  </div>
</template>
<script>
export default {
  props: {
    buttonText: String,
    height: String,
    width: String
  },
  data () {
    return {
      defaultButtonText: 'Показать полностью',
      showMoreText: false
    }
  },
  methods: {
    showMore () {
      this.showMoreText = true
    }
  }
}
</script>
