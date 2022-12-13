<script>
export default {
  data() {
    return {
      documentTitle: process.server ? '' : !!document.title,
      navshow: false,
      posts: [],
    };
  },
  async fetch() {
    this.posts = await this.$content('', { deep: true }).fetch();
  },
  mounted () {
    document.addEventListener('visibilitychange', this.handleVisibility, false);
  },
  methods: {
    handleVisibility (e) {
      if (document.hidden) {
        this.documentTitle = document.title;
        document.title = 'I am watching you...';
        document.querySelector("link[rel~='icon']").href = "/favicon2.ico";
      } else {
        document.title = this.documentTitle;
        document.querySelector("link[rel~='icon']").href = "/favicon.ico";
      };
    },
  },
};
</script>

<template>
  <div>
    <div class="bg">
      <div class="img"></div>
      <div class="mix"></div>
      <div class="snow">
        <div v-for="n in 200" :key="n" class="snowflake"><span></span></div>
      </div>
    </div>
    <HeaderItem :snb.sync="navshow"></HeaderItem>
    <main class="container-md">
      <div class="menu" :class="{ show: navshow }">
        <NavbarItem />
      </div>
      <Nuxt />
      <div class="mixx">
        <AsideItem :pl.sync="posts.length" />
      </div>
    </main>
    <FooterItem />
  </div>
</template>

<style lang="sass">
@import "./assets/style/_mixin.sass"
@import "./assets/style/app.sass"
@import "./assets/style/header.sass"
@import "./assets/style/navbar.sass"
@import "./assets/style/aside.sass"
@import "./assets/style/article.sass"
@import "./assets/style/main.sass"
@import "./assets/style/snow.sass"
</style>
