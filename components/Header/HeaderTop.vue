<template>
  <div class="header-top">
    <div class="header-left">
      <div
        class="check-address mobile-hide link"
        v-smooth-scroll
        href='#check-address'
        @click="scrollToCheckAddress"
      >Проверить адрес</div>
      <div class="time-delivery">
        Среднее время доставки*: <strong>00:24:19</strong>
      </div>
    </div>
    <div class="header-right tablet-hide">
      <div class="time-work">
        Время работы: с 11:00 до 23:00
      </div>
      <LinkPhone
        addPlus
        value='7 (926) 223-10-11'
      />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollToCheckAddress () {
      this.$store.commit('interface/focus_to_check_address', true)
    }
  }
}
</script>
