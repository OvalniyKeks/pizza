<template>
  <Card
    padding='16px 32px'
    class="flex justify-between align-center check-address"
  >
    <label
      for="check"
      class="title"
    >
      Проверить адрес доставки
    </label>

    <Input
      name="check"
      placeholder="Адрес"
      address
      :backlight='backlight'
      id="check-address-input"
    >
    <template v-slot:prefix>
      <img
        src="~assets/images/icon/global/map_target.svg"
        alt=""
      >
    </template>
    </Input>

    <Button
      class="h-100"
      height='48px'
      orange
      center
    >
      Проверить
    </Button>
  </Card>
</template>
<script>
export default {
  data () {
    return {
      backlight: false
    }
  },
  computed: {
    focusCheckAddress () {
      return this.$store.state.interface.focusCheckAddress
    }
  },
  watch: {
    focusCheckAddress (val) {
      if (val) {
        this.backlight = !this.backlight
        this.$store.commit('interface/focus_to_check_address', false)
      }
    }
  }
}
</script>
