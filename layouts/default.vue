<script>
export default {
    data() {
        return {
            documentTitle: process.server ? "" : !!document.title,
            navshow: false,
            post: [],
            tags: [],
            pl1: Number,
            pl2: Number,
            pl3: Number,
            mixxt: 0,
            LoadingState: true
        };
    },
    async fetch() {
        this.post = await this
            .$content("", { deep: true })
            .only(["image", "title", "tags", "slug", "createdAt", "category"])
            .sortBy("createdAt", "desc")
            .fetch();
        this.pl1 = this.post.length;
        const tl = [];
        this.post.forEach(function (post) {
            post.tags.forEach(function (pt) {
                tl.push(pt.toLowerCase());
            });
        });
        this.pl2 = [...new Set(tl)].length;
        const obj = tl.reduce((allNum, num) => {
            if (num in allNum) {
                allNum[num]++;
            }
            else {
                allNum[num] = 1;
            }
            return allNum;
        }, {});
        this.tags = obj;
        this.pl3 = await this
            .$content("portfolio")
            .only(["title"])
            .fetch();
        this.pl3 = this.pl3.length;
    },
    mounted() {
        document.addEventListener("visibilitychange", this.handleVisibility, false);
        this.$nextTick(() => {
            setTimeout(() => {
                this.LoadingState = false;
            }, 2250);
        });
    },
    methods: {
        handleVisibility(e) {
            if (document.hidden) {
                this.documentTitle = document.title;
                document.title = "I am watching you...";
                document.querySelector("link[rel~='icon']").href = "/reikama/favicon2.ico";
            }
            else {
                document.title = this.documentTitle;
                document.querySelector("link[rel~='icon']").href = "/reikama/favicon.ico";
            }
            ;
        },
        getChildData(param) {
            this.mixxt = param;
        }
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
      <Nuxt />
      <div class="shown-btn"> 
        <img alt="Toggle Button - Red Pandas Icons by svgrepo.com" src="~/assets/images/icons/red-panda-svgrepo-com.svg" />
      </div>
      <div class="menu" :class="{ show: navshow }">
        <NavbarItem />
      </div>
      <div class="mixx" :style="{ 'top': '-' + mixxt + 'px' }">
        <AsideItem :pl.sync="pl1" :tl.sync="pl2" :ppl.sync="pl3" :postlist.sync="post" :taglist.sync="tags" :loadingstate.sync="LoadingState" @mixxTop="getChildData" />
      </div>
    </main>
    <FooterItem />
    <back-to-top text="">
      <fa :icon="['fa-solid', 'chevron-up']" />
    </back-to-top>
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
