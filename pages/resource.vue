<script>
export default {
  name: 'Resource',
  data() {
    return {
      posts: [],
      page: 1,
      pageSize: 12,
      startIndex: 0,
      endIndex: 12, // same as pageSize
      loadState: true,
      loadState2: true,
    };
  },
  async fetch() {
    this.posts = await this
      .$content('resource')
      .without(['body'])
      .sortBy('createdAtTime', 'desc')
      .fetch();
  },
  head() {
    return {
      title: `${this.$i18n.t('resource')} | Kama's Blog`,
      htmlAttrs: {
        lang: this.$i18n.t('localeSetting'),
      },
      meta: [
        { hid: 'description', name: 'description', content: this.$i18n.t('indexmd') },
        { property: 'og:title', content: `${this.$i18n.t('resource')} | Kama's Blog` },
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
          this.loadState2 = false;
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
};
</script>

<template>
  <div class="main pfl position-relative">
    <div class="hd-i-w r" style="opacity: .75;"></div>

    <section class="area-tf mt-3">
      <h3 v-if="loadState" class="mx-auto"></h3>
      <h3 v-else>
        {{ $t("resource") }}
      </h3>
      <p v-if="loadState" class="mx-auto"></p>
      <p v-else>{{ $t("resourcedescription") }}</p>

      <div class="d-flex mt-4 justify-content-center mb-5">
        <div class="bg-primary-lighten d-inline-flex rounded" style="width: 4rem; height: 0.25rem;"></div>
      </div>
    </section>
    <div class="d-flex flex-wrap position-relative">
      <div v-if="loadState2" class="position-absolute w-100 d-flex flex-wrap">
        <div v-for="n in HistoryList.length" :key="n" class="SkeletonResource rscp-card">
          <div class="post-img"></div>
          <div class="post-info text-left pt-2">
            <div class="post-tag"></div>
            <h3 class="font-weight-bold"></h3>
            <p></p>
            <div class="d-flex justify-content-between align-items-end">
              <div></div>
              <a></a>
            </div>
          </div>
        </div>
      </div>
      <ResourceItem v-for="(post, index) of HistoryList" :key="index" class="niam" :class="{show: !loadState2}" :post="post"></ResourceItem>
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
</template>