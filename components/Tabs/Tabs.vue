<template>
  <div class="tabs flex flex-nowrap">
    <div
      class="tabs-slider"
      ref="tabs_slider"
    ></div>
    <TabsButton
      v-for="(tab, i) of tabs"
      :key="`tab-${i}`"
      :class="{'active': i === currTabIdx}"
      @click="setTab(i)"
    >
      {{prefixTab}} {{tab.label}} {{suffixTab}}
    </TabsButton>
  </div>
</template>
<script>
export default {
  props: {
    tabs: Array,
    startValue: Object,
    prefixTab: String,
    suffixTab: String
  },
  data () {
    return {
      currTabIdx: 0,
      step: 0,
      slider: null
    }
  },
  mounted () {
    this.setSlider()

    if (this.startValue) {
      const idx = this.tabs.indexOf(this.tabs.find(tab => tab.id === this.startValue.id))
      this.currTabIdx = idx
      this.changePositionSlider(idx)
    }
  },
  methods: {
    setSlider () {
      this.step = 100 / this.tabs.length

      this.slider = this.$refs.tabs_slider
      this.slider.style.width = `${this.step}%`
      this.slider.style.transition = '.3s ease-in-out'
    },
    setTab (i) {
      this.currTabIdx = i
      this.$emit('change', this.tabs[i])
      this.$emit('input', this.tabs[i])
      this.changePositionSlider(i)
    },
    changePositionSlider (i) {
      this.slider.style.left = `${this.step * i}%`
    }
  }
}
</script>
