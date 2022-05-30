<template>
  <client-only>
    <yandex-map
      :coords="coords"
      :zoom="10"
      @click="onClick"
    >
      <ymap-marker
        :coords="coords"
        marker-id="123"
        hint-content="some hint"
      />
    </yandex-map>
  </client-only>
</template>
<script>
export default {
  data: () => ({
    coords: [
      54.82896654088406,
      39.831893822753904,
    ],
  }),
  methods: {
    onClick (e) {
      this.coords = e.get('coords');
    },
  },
};
</script>
