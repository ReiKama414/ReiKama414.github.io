<script>
export default {
  name: 'World',
  data() {
    return {
    };
  },
  head() {
    return {
      title: `${this.$i18n.t('world')} | Kama's Blog`,
      htmlAttrs: {
        lang: this.$i18n.t('localeSetting'),
      },
      meta: [
        { hid: 'description', name: 'description', content: this.$i18n.t('indexmd') },
        { property: 'og:title', content: `${this.$i18n.t('world')} | Kama's Blog` },
        { property: 'og:description', content: this.$i18n.t('indexmd') },
        { property: 'og:locale', content: this.$i18n.t('localeSetting') }
      ],
    };
  },
};
</script>

<template>
  <div class="main pfl">
    <div class="h-bg"></div>
    <h2>施工中</h2>
  </div>
</template>