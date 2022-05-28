<template>
  <div class="header-top">
    <div class="header-left">
      <div class="header-city link">
        <img
          src="~assets/images/icon/global/map_target.svg"
          alt=""
        >
        <div class="city">
          Москва
          <div class="arrow-wrapper mobile-hide">
            <div class="arrow"></div>
          </div>
        </div>
      </div>
      <div class="check-address mobile-hide link">Проверить адрес</div>
      <div class="time-delivery">
        Среднее время доставки*: <strong>00:24:19</strong>
      </div>
    </div>
    <div class="header-right mobile-hide">
      <div class="time-work">
        Время работы: с 11:00 до 23:00
      </div>
      <HeaderProfile />
    </div>
  </div>
</template>
<script>
export default {

}
</script>
