<script>
export default {
  name: 'Tag',
  data() {
    return {
      posts: [],
      page: 1,
      pageSize: 6,
      startIndex: 0,
      endIndex: 6, // same as pageSize
      loadState: true,
      loadState2: false,
    };
  },
  async fetch() {
    this.posts = await this
      .$content('', { deep: true })
      .without(['body'])
      .sortBy('createdAtTime', 'desc')
      .fetch();
    this.posts = this.posts.filter(
      post => post.tags
        .map(element => {
          return element.toLowerCase();
        })
        .includes(this.$route.params.tag)
    );
  },
  head() {
    return {
      title: `${this.$i18n.t(this.$route.params.tag).toUpperCase()} | Kama's Blog`,
      htmlAttrs: {
        lang: this.$i18n.t('localeSetting'),
      },
      meta: [
        { hid: 'description', name: 'description', content: this.$i18n.t('indexmd') },
        { property: 'og:title', content: `${this.$i18n.t(this.$route.params.tag).toUpperCase()} | Kama's Blog` },
        { property: 'og:description', content: this.$i18n.t('indexmd') },
        { property: 'og:locale', content: this.$i18n.t('localeSetting') }
      ],
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.posts.length / this.pageSize);
    },
    HistoryList() {
      if (this.posts.length < this.pageSize) return this.posts;
      else return this.posts.slice(this.startIndex, this.endIndex);
    },
  },
  mounted() {
    if (this.$route.query.page) {
      this.updatePage(Number(this.$route.query.page));
    };
    this.$nextTick(() => {
      setTimeout(() => {
          this.loadState = false;
      }, 1800);
    });
  },
  methods: {
    updatePage(pageIndex) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      this.startIndex = (pageIndex - 1) * this.pageSize;
      this.endIndex = pageIndex * this.pageSize;
      this.page = pageIndex;
      this.loadState2 = true;
      this.$nextTick(() => {
        setTimeout(() => {
            this.loadState2 = false;
        }, 1800);
      });
      // this.$router.push({ query: { page: this.page } });
    },
  },
}
</script>

<template>
  <div class="main position-relative">
    <div class="card-widget">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0 pr-1 pl-1">
          <li class="breadcrumb-item">
            <NuxtLink :to="localePath(`/tag`)">
              {{ $t("tags") }}
            </NuxtLink>
          </li>
          <li class="breadcrumb-item active">
            <a href="#">
              {{ $t(`${$route.params.tag}`) }}
            </a>
          </li>
        </ol>
      </nav>
    </div>

    <div v-if="loadState" class="position-absolute w-100">
        <div v-for="n in HistoryList.length" :key="n" class="SkeletonArticle arc-card card-widget d-flex">
          <div class="col-12 col-sm-4 arc-img"></div>
          <div class="col-12 col-sm-8 arc-content p-3">
            <h2 class="arc-title"></h2>
            <div class="arc-info d-flex"></div>
            <div class="arc-intro"></div>
            <div class="arc-tagslist"></div>
          </div>
        </div>
    </div>
    
    <div class="niam" :class="{show: !loadState}">
      <div class="al position-relative">
        <div v-if="loadState2" class="position-absolute w-100">
            <div v-for="n in HistoryList.length" :key="n" class="SkeletonArticle arc-card card-widget d-flex">
              <div class="col-12 col-sm-4 arc-img"></div>
              <div class="col-12 col-sm-8 arc-content p-3">
                <h2 class="arc-title"></h2>
                <div class="arc-info d-flex"></div>
                <div class="arc-intro"></div>
                <div class="arc-tagslist"></div>
              </div>
            </div>
        </div>
        <ArticleItem v-for="(post, index) of HistoryList" :key="index" class="niam" :class="{show: !loadState2}" :post="post"></ArticleItem>
      </div>

      <v-app v-if="posts.length > pageSize" class="mt-4">
        <v-pagination
          v-model="page"
          :length="pages"
          :total-visible="7"
          circle
          prev-icon="mdi-arrow-left"
          next-icon="mdi-arrow-right"
          @input="updatePage"
        ></v-pagination>
      </v-app>
    </div>
  </div>
</template>