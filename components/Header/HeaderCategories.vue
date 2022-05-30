<template>
  <div class="header-categories">
    <div
      v-for="(cat, i) of categories"
      :key="`header-category-${i}`"
      class="header-category link"
    >
      {{cat.label}}
    </div>
    <div
      class="header-category link"
      @click="dropdownMenu = !dropdownMenu"
    >
      <span>
        Другое
        <HelpersArrow :value='dropdownMenu' />
      </span>
      <DropDownMenu
        v-model="dropdownMenu"
        class="header-menu__drop"
      >
        <NuxtLink
          to="/test"
          tag="div"
          class="header-menu__link link"
        >
          О компании
        </NuxtLink>
        <NuxtLink
          to="/"
          tag="div"
          class="header-menu__link link"
        >
          Пользовательское соглашение
        </NuxtLink>
        <NuxtLink
          to="/"
          tag="div"
          class="header-menu__link link"
        >
          Условия гарантии
        </NuxtLink>
        <NuxtLink
          to="/"
          tag="div"
          class="header-menu__link link"
        >
          Ресторан
        </NuxtLink>
        <NuxtLink
          to="/"
          tag="div"
          class="header-menu__link link"
        >
          Контакты
        </NuxtLink>
        <NuxtLink
          to="/"
          tag="div"
          class="header-menu__link link"
        >
          Поддержка
        </NuxtLink>
        <NuxtLink
          to="/"
          tag="div"
          class="header-menu__link link"
        >
          Отследить заказ
        </NuxtLink>
      </DropDownMenu>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dropdownMenu: false
    }
  },
  computed: {
    categories () {
      return this.$store.state.products.categories
    }
  }
}
</script>
