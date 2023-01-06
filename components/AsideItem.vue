<script>
import moment from 'moment';
import slugEventBus from "assets/js/slugEventBus.js";
export default {
  props: {
    pl: {
      type: Number,
      default: 0,
    },
    tl: {
      type: Number,
      default: 0,
    },
    ppl: {
      type: Number,
      default: 0,
    },
    postlist: {
      type: [Array, Object],
      default() {
          return {}
      },
    },
    taglist: {
      type: [Array, Object],
      default() {
          return {}
      },
    },
  },
  data() {
    return {
      profileList: ["MyLive2D.png", "MyPaint.png"],
      recentpostLimit: 2,
      postTitle: "",
      postReadTime: "",
      postReadTimeWord: "",
      filterHeightCount: 0,
    };
  },
  computed: {
    profilerandom() {
      return this.profileList[Math.floor(Math.random() * 2)];
    },
  },
  updated() {
    this.filterHeightCount = this.$refs.ref_asdwrp.offsetHeight - this.$refs.ref_asdwrp.lastElementChild.offsetHeight - 86.4 + 16;
    this.$emit('mixxTop', this.filterHeightCount);
  },
  created() {
    this.getFromBrother();
  },
  methods: {
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    getFromBrother() {
      slugEventBus.$on("title", (params) => {
        this.postTitle = params;
      });
      slugEventBus.$on("readingTime", (params) => {
        this.postReadTime = params;
      });
      slugEventBus.$on("readingTimeWords", (params) => {
        this.postReadTimeWord = params;
      });
    },
    getNuxtHeading() {
      if (process.browser) {
        const tags = document.querySelector('.nuxt-content').querySelectorAll('h2, h3');
        if (tags.length > 0) return tags;
        else return '';
      }
    },
    getSlugTagsID() {
      const tags = this.getNuxtHeading();
      const tagsList = [];
      tags.forEach((tag) => {
        tagsList.push([tag.tagName, tag.id, tag.innerText]);
      });
      return tagsList;
    },
    goAuchor(id) {
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    },
  },
};
</script>

<template>
  <div ref="ref_asdwrp">
    <div v-if="!postTitle" class="card-widget mb-4">
      <div class="author-profile">
        <div>
          <img
            alt="profile photo"
            :src="require('~/assets/images/profile/' + profilerandom)"
          />
        </div>
        <div class="pt-3 pb-3">Kama</div>
        <div>
          <fa :icon="['fa-solid', 'location-dot']" style="margin-right: .25rem" />
          Tainan, Taiwan
        </div>
      </div>
      <div class="info-data mt-4 mb-3">
        <div class="info-data-item">
          <div> {{ $t("article") }} </div>
          <div>{{ pl }}</div>
        </div>
        <div class="info-data-item">
          <div> {{ $t("tags") }} </div>
          <div>{{ tl }}</div>
        </div>
        <div class="info-data-item">
          <div> {{ $t("work2") }} </div>
          <div>{{ ppl }}</div>
        </div>
      </div>
      <div class="urlList">
        <a href="https://github.com/ReiKama414?tab=repositories" target="_blank">
          <fa :icon="['fa-brands', 'github']" />
        </a>
        <a href="https://codepen.io/Rei_Kama414" target="_blank">
          <fa :icon="['fa-brands', 'codepen']" />
        </a>
        <a
          href="https://discordapp.com/users/871649191338860564https://discordapp.com/users/871649191338860564"
          target="_blank"
        >
          <fa :icon="['fa-brands', 'discord']" />
        </a>
      </div>
    </div>

    <div v-else class="card-widget mb-4">
      <button class="dot-widget" @click="goAuchor('body')">
        <span class="title mb-1">{{ postTitle }}</span>
        <span>
          <fa :icon="['fa-solid', 'book-open']" class="mr-1" />
            {{ $t("about2") }} {{ postReadTimeWord }} {{ $t("word") }}
            ({{ postReadTime }} {{ $t("minread") }})
        </span>
      </button>
    </div>

    <div class="aside-item recent_post_area p-2 text-left mb-1">
      <h3 class="font-weight-bold pb-1 mb-3">近期貼文</h3>
      <div v-if="pl <= recentpostLimit">
        <div v-for="(post, index) of postlist" :key="index" class="rp_item d-flex my-4">
          <nuxt-link :to="localePath(`/blog/${post.slug}`)" class="mr-2">
            <img alt="article image" :src="require(`~/assets/images/blog/${post.image}`)" />
          </nuxt-link>
          <div>
            <p class="mb-0">{{ formatDate(post.createdAt) }}</p>
            <h6 class="mb-1" :title="post.title">
              <nuxt-link :to="localePath(`/blog/${post.slug}`)">
                {{ post.title }}
              </nuxt-link>
            </h6>
            <span>
              <NuxtLink :to="localePath(`/${post.category}`)">
                {{ $t(post.category) }}
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-for="n in recentpostLimit" :key="n" class="rp_item d-flex my-4">
          <nuxt-link :to="localePath(`/blog/${postlist[(n - 1)].slug}`)" class="mr-2">
            <img alt="article image" :src="require(`~/assets/images/blog/${postlist[(n - 1)].image}`)" />
          </nuxt-link>
          <div>
            <p class="mb-0">{{ formatDate(postlist[(n - 1)].createdAt) }}</p>
            <h6 class="mb-1" :title="postlist[(n - 1)].title">
              <nuxt-link :to="localePath(`/blog/${postlist[(n - 1)].slug}`)">
                {{ postlist[(n - 1)].title }}
              </nuxt-link>
            </h6>
            <span>
              <NuxtLink :to="localePath(`/${postlist[(n - 1)].category}`)">
                {{ $t(postlist[(n - 1)].category) }}
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="aside-item tag_area p-2 text-left mb-4">
      <h3 class="font-weight-bold pb-1 mb-3">標籤</h3>
      <div class="d-flex flex-wrap">
        <div v-for="(tag, key, index) of taglist" :key="index" class="tags-item mr-2">
          <NuxtLink :to="localePath(`/tags/${key}`)" class="tags">
            <div v-if="$te(key)"> {{ $t(`${key}`) }} </div>
            <div v-else> {{ key }} </div>
            <div> {{ tag }} </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-if="postTitle && getNuxtHeading()" class="card-widget mb-4">
      <div class="dot-widget text-left anchor-wrapper">
        <div v-for="(a, index) of getSlugTagsID()" :key="index" class="anchor-item py-2">
          <span v-if="a[0] == 'H2'">
            <fa :icon="['fa-solid', 'seedling']" class="mr-1" />
          </span>
          <span v-else-if="a[0] == 'H3'" class="ml-3">⦁</span>
          <button @click="goAuchor(`#${a[1]}`)">{{ a[2] }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
