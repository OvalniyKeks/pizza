<template>
  <div class="header-menu">

    <div class="container">
      <HeaderProfile />
    </div>

    <HelpersHr />

    <div class="container">
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
    </div>

    <HelpersHr />

    <div class="container">
      <div class="footer-item">
        <img
          src="~assets/images/icon/global/phone.svg"
          alt=""
        >
        <LinkPhone
          addPlus
          value='7 (926) 223-10-11'
        />
      </div>
      <div class="footer-item">
        <img
          src="~assets/images/icon/global/map_target.svg"
          alt=""
        >
        <LinkAddress value='Москва, ул. Юных Ленинцев, д.99'>Москва, ул. Юных Ленинцев, д.99</LinkAddress>
      </div>
      <div class="footer-item">
        <div
          class="flex align-center"
          style="margin-right: 24px"
        >
          <img
            src="~assets/images/icon/global/facebook.svg"
            alt=""
          >
          <LinkSite
            value='https://ru-ru.facebook.com/'
            title="Facebook"
          />
        </div>
        <div class="flex align-center">
          <img
            src="~assets/images/icon/global/instagram.svg"
            alt=""
          >
          <LinkSite
            value='https://instagram.com'
            title="Instagram"
          />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {

}
</script>
