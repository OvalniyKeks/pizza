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
    >
      Проверить
    </Button>
  </Card>
</template>
<script>
export default {

}
</script>
