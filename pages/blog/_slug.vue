<script>
import moment from 'moment';
import slugEventBus from "assets/js/slugEventBus.js";

export default {
  name: 'Slug',
  beforeRouteLeave(to, form, next) {
    // window.confirm('ok?');
    slugEventBus.$emit("title", "");
    slugEventBus.$emit("readingTime", "");
    slugEventBus.$emit("readingTimeWords", "");
    next();
  },
  async asyncData({ $content, params }) {
    const pageSlug = params.slug;
    const [prev, next] = await $content('', { deep: true })
      .only(['title', 'slug'])
      .sortBy('createdAtTime', 'asc')
      .surround(pageSlug)
      .fetch();
    return { prev, next};
  },
  data() {
    return {
      post: null,
      host: "",
      lbimg: "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=",
      sh: false,
      relatedposts: [],
      ctgr: "",
      limitNum: 3,
      catlength: 0,
      // showImage: true,
    }
  },
  async fetch() {
    this.post = (
      await this
        .$content('', { deep: true })
        .where({ slug: this.$route.params.slug })
        .limit(1)
        .fetch()
    )?.[0]

    if (this.post.category === 'work') this.ctgr = 'portfolio';
    else this.ctgr = this.post.category;

    this.catlength = await this
      .$content(this.ctgr)
      .only('slug')
      .fetch();
    this.catlength = this.catlength.length;

    this.relatedposts = await this
      .$content(this.ctgr)
      .only(['readingTime', 'title', 'category', 'description', 'createdAtTime', 'slug', 'image'])
      .where({ slug: { $ne: this.$route.params.slug } })
      .limit(this.limitNum)
      .fetch();
  },
  head() {
    return {
      title: this.post ? `${this.post.title} | Kama's Blog` : 'Kama\'s Blog',
      htmlAttrs: {
        lang: this.$i18n.t('localeSetting'),
      },
      meta: [
        { hid: 'description', name: 'description', content: this.post ? this.post.description : this.$i18n.t('indexmd') },
        { property: 'og:title', content: this.post ? `${this.post.title} | Kama's Blog` : 'Kama\'s Blog' },
        { property: 'og:description', content: this.post ? this.post.description : this.$i18n.t('indexmd') },
        { property: 'og:locale', content: this.$i18n.t('localeSetting') }
      ],
    };
  },
  // computed: {
  //   badgeUrl() {
  //     return `https://visitor-badge.glitch.me/badge?page_id=ReiKama414.ReiKama414.github.io.blog/${this.post.slug}&left_color&right_color=4B4B4B`;
  //   },
  // },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.host = window.location.host;
  },
  updated() {
    slugEventBus.$emit("title", this.post.title);
    slugEventBus.$emit("readingTime", Math.ceil(this.post.readingTime.minutes));
    slugEventBus.$emit("readingTimeWords", this.post.readingTime.words);
  },
  methods: {
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    formatDate2(date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    },
    LBshow(e) {
      this.sh = true;
      this.lbimg = e.target.src;
    },
    LBclose() {
      this.sh = false;
    },
    handleScroll(e) {
      slugEventBus.$emit("windowScrollY", window.scrollY);
    },
    tTheme(style) {
      this.utterancesTheme = style;
    },
    badgeFailed() {
      this.badgeLoaded = false;
    },
    // onImageError() {
    //   this.showImage = false;
    // },
  },
}
</script>

<template>
  <div class="main">
    <div v-if="post" class="post-wrapper card-widget">
      <div class="header">
        <div class="info d-flex mt-2">
          <p :title="formatDate2(post.createdAtTime)">
            <fa :icon="['fa-solid', 'calendar-days']" class="mr-1" />
            {{ $t("releasedin") }}
            {{ formatDate(post.createdAtTime) }}
          </p>
          <p :title="formatDate2(post.updatedAtTime)">
            <fa :icon="['fa-solid', 'clock-rotate-left']" class="mr-1" />
            {{ $t("updatedin") }}
            {{ formatDate(post.updatedAtTime) }}
          </p>
          <NuxtLink :to="localePath(`/${post.category}`)" :title="$t('category')" class="pr-3">
            <fa :icon="['fa-solid', 'feather-pointed']" class="mr-1" />
            {{ $t(post.category) }}
          </NuxtLink>
          <p class="prtw">
            <fa :icon="['fa-solid', 'book-open']" class="mr-1" />
            {{ $t("about2") }}{{ post.readingTime.words }}{{ $t("word") }}
            ({{ Math.ceil(post.readingTime.minutes) }}{{ $t("minread") }})
          </p>
          <!-- <div v-if="showImage" class="d-flex align-items-center">
            <fa :icon="['fa-solid', 'eye']" class="mr-1" />
            !-- {{ $t("visits") }}  --
            <img :src="badgeUrl" @error="onImageError" alt="readerCounter" />
            !-- {{ $t("times") }} --
          </div> -->
        </div>
        <div class="pt-4 pb-1">
          <h1 class="title pl-3 pr-3">{{ post.title }}</h1>
        </div>
        <div class="image my-3 mx-2">
          <img alt="Title Image" :src="require(`~/assets/images/blog/${post.image}`)" @click="LBshow" />
        </div>
        <p v-if="post.sourceimg2_n != 'Kama'" class="img-origin mt-1 mb-3">
          Photo by 
          <a :href="post.sourceimg1_u" target="_blank" class="ud">
            {{ post.sourceimg1_n }}
          </a>
           on 
          <a :href="post.sourceimg2_u" target="_blank" class="ud">
            {{ post.sourceimg2_n }}
          </a>
        </p>
      </div>
      <nuxt-content :document="post" />

      <div class="licensing">
        <div class="title d-flex flex-wrap">
          <div class="col-12 mb-3">
            <p>{{ post.title }}</p>
            <p>
              <a :href="$nuxt.$route.path" class="ud">
                https://{{ host }}{{ $nuxt.$route.path }}
              </a>
            </p>
          </div>
          <div class="col-6 col-sm-4 col-xl-2 p-0">
            <p>{{ $t("author") }}</p>
            <p><a href="#">Kama</a></p>
          </div>
          <div class="col-6 col-sm-6 col-xl-3 p-0">
            <p>{{ $t("releasedin") }}</p>
            <p><a href="#">{{ formatDate2(post.createdAtTime) }}</a></p>
          </div>
          <div class="col-12 col-xl-6 p-0">
            <p>{{ $t("agreement") }}</p>
            <p>
              <a :href="`https://creativecommons.org/licenses/by-nc/4.0/deed.${$t('cc0-2')}`" target="_blank" class="ud">
                <fa :icon="['fa-brands', 'creative-commons']" />
                {{ $t("cc0-1") }} (CC BY-NC 4.0)
              </a>
            </p>
          </div>
          <!-- <span>Posted: {{ formatDate(post.gitCreatedAt) }}</span>
          <span>Updated: {{ formatDate(post.gitUpdatedAt) }}</span> -->
        </div>
      </div>
      
      <div class="tagslist">
        <span v-for="tag of post.tags" :key="tag" class="mr-2">
          <NuxtLink v-if="$te(tag)" :to="localePath(`/tags/${tag.toLowerCase()}`)">
            #{{ $t(`${tag}`) }}
          </NuxtLink>
          <NuxtLink v-else :to="localePath(`/tags/${tag.toLowerCase()}`)">
            #{{ tag }}
          </NuxtLink>
        </span>
      </div>
    </div>
    <div class="prev-next d-flex flex-wrap mb-4">
      <div class="col-12 col-custom-6">
        <NuxtLink v-if="prev" :to="localePath({ params: { slug: prev.slug } })">
          <div class="pn-item card-widget">
            <p class="mb-0 p-prev">←&ensp;{{ $t("previouspage") }}</p>
            <div>
              {{ prev.title }}
            </div>
          </div>
        </NuxtLink>
        <div v-else class="pn-item card-widget">
          <div>
            <span> {{ $t("startpage") }} </span>
          </div>
        </div>
      </div>
      <div class="col-12 col-custom-6">
        <NuxtLink v-if="next" :to="localePath({ params: { slug: next.slug } })">
          <div class="pn-item card-widget">
              <p class="mb-0 p-next">{{ $t("nextpage") }}&ensp;→</p>
              <div>
                {{ next.title }}
              </div>
          </div>
        </NuxtLink>
        <div v-else class="pn-item card-widget">
          <div>
            <span> {{ $t("endpage") }} </span>
          </div>
        </div>
      </div>
    </div>
    
    <RelatedItem v-for="p of relatedposts" :key="p.slug" :post="p"></RelatedItem>

    <NuxtLink v-if="catlength > limitNum" :to="localePath(`/${post.category}`)" class="rmcat d-inline-block mx-auto my-3 px-3 py-2">
      <span>
        Read more from {{ $t(post.category) }}
      </span>
    </NuxtLink>

    <component
      :is="'script'"
      src="https://utteranc.es/client.js"
      repo="ReiKama414/ReiKama414.github.io"
      issue-term="pathname"
      theme="github-light"
      crossorigin="anonymous"
      async
    >
    </component>

    <section :class="{showstate: sh}" class="km-lightbox" @click="LBclose">
      <div class="mask"></div>
      <div class="lbiw">
        <img alt="lightbox-image" :src="lbimg" />
      </div>
    </section>
  </div>
</template>