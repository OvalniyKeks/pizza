<template>
  <div
    class="tabs flex flex-nowrap"
    v-if="!error"
  >
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
      slider: null,

      error: false
    }
  },
  mounted () {
    this.checkTabsError()

    if (!this.error) this.setSlider()

    if (this.startValue) {
      const idx = this.tabs.indexOf(this.tabs.find(tab => tab.label === this.startValue.label))
      this.currTabIdx = idx
      if (!this.error) this.changePositionSlider(idx)
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
    },
    async checkTabsError () {
      for (const tab of this.tabs) {
        if (!tab.label) {
          this.error = true
          break
        }
      }

    }
  }
}
</script>
