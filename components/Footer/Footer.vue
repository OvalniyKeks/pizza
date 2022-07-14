<template>
  <div class="footer-wrapper">
    <HelpersHr />
    <div class="footer">
      <div class="container">
        <div class="footer-inner">

          <div class="footer-section flex flex-column justify-between">
            <NuxtLink
              to="/"
              class="flex align-center"
            >
              <img
                src="~assets/images/logo.svg"
                class="logo"
              >
            </NuxtLink>
            <div class="tablet-hide">© Copyright 2021 — Пицца</div>
          </div>

          <div class="footer-section">
            <div class="title">Куда пицца</div>
            <NuxtLink
              to="/"
              tag="div"
              class="link"
            >
              О компании
            </NuxtLink>
            <NuxtLink
              to="/"
              tag="div"
              class="link"
            >
              Пользовательское соглашение
            </NuxtLink>
            <NuxtLink
              to="/"
              tag="div"
              class="link"
            >
              Условия гарантии
            </NuxtLink>
          </div>
          <div class="footer-section">
            <div class="title">Контакты</div>
            <NuxtLink
              to="/"
              tag="div"
              class="link"
            >
              Ресторан
            </NuxtLink>
            <NuxtLink
              to="/"
              tag="div"
              class="link"
            >
              Контакты
            </NuxtLink>
            <NuxtLink
              to="/"
              tag="div"
              class="link"
            >
              Поддержка
            </NuxtLink>
            <NuxtLink
              to="/"
              tag="div"
              class="link"
            >
              Отследить заказ
            </NuxtLink>
          </div>
          <div class="footer-section">
            <div class="title">Помощь</div>
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
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
