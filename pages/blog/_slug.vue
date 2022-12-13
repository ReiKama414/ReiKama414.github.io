<script>
import moment from 'moment';
export default {
  async asyncData({ $content, params }) {
    const [prev, next] = await $content('', { deep: true })
      .only(['title', 'slug'])
      .sortBy('slug', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      prev,
      next
    }
  },
  data() {
    return {
      post: null,
      host: "",
    }
  },
  async fetch() {
    this.post = (
      await this.$content('', { deep: true })
        .where({ slug: this.$route.params.slug })
        .limit(1)
        .fetch()
    )?.[0]
  },
  mounted () {
    this.host = window.location.host;
  },
  methods: {
    formatDate(date) {
        return moment(date).format('YYYY-MM-DD');
    },
    formatDate2(date) {
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
    },
  },
}
</script>

<template>
  <div class="main">
    <div v-if="post" class="post-wrapper card-widget">
        <div class="header">
            <div class="info d-flex mt-2">
                <p :title="formatDate2(post.createdAt)">
                    <fa :icon="['fa-solid', 'calendar-days']" class="mr-1" />
                    {{ $t("releasedin") }}
                    {{ formatDate(post.createdAt) }}
                </p>
                <p :title="formatDate2(post.updatedAt)">
                    <fa :icon="['fa-solid', 'clock-rotate-left']" class="mr-1" />
                    {{ $t("updatedin") }}
                    {{ formatDate(post.updatedAt) }}
                </p>
                <NuxtLink :to="localePath(`${post.category}`)" :title="$t('category')">
                    <fa :icon="['fa-solid', 'feather-pointed']" class="mr-1" />
                    {{ $t(`${post.category}`) }}
                </NuxtLink>
                <p class="pl-3 prtw">
                  <fa :icon="['fa-solid', 'book-open']" class="mr-1" />
                  {{ $t("about2") }}{{ post.readingTime.words }}{{ $t("word") }}
                  ({{ Math.ceil(post.readingTime.minutes) }}{{ $t("minread") }})
                </p>
                <!-- <p class="pl-3">
                  <fa :icon="['fa-solid', 'eye']" class="mr-1" />
                  {{ $t("visits") }} xxx {{ $t("times") }}
                </p> -->
            </div>
            <div class="pt-4 pb-1">
                <h3 class="title pl-3 pr-3">{{ post.title }}</h3>
            </div>
            <div class="image mt-3 mb-3 p-2">
                <img alt="Title Image" :src="require(`~/assets/images/blog/${post.image}`)" />
            </div>
        </div>
        <nuxt-content :document="post" />

        <div class="licensing">
          <div class="title d-flex flex-wrap">
            <div class="col-12 mb-3">
              <p>{{ post.title }}</p>
              <p>
                <a :href="$nuxt.$route.path" class="ud">
                  {{ host }}{{ $nuxt.$route.path }}
                </a>
              </p>
            </div>
            <div class="col-6 col-sm-4 col-xl-2 p-0">
              <p>{{ $t("author") }}</p>
              <p><a href="#">Kama</a></p>
            </div>
            <div class="col-6 col-sm-6 col-xl-3 p-0">
              <p>{{ $t("releasedin") }}</p>
              <p><a href="#">{{ formatDate2(post.createdAt) }}</a></p>
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
          </div>
        </div>
        
        <div class="tagslist">
          <span v-for="tag of post.tags" :key="tag" class="mr-2">
              <a href="#">#{{ tag }}</a>
          </span>
        </div>
    </div>
    <div class="prev-next d-flex flex-wrap">
      <div class="col-12 col-xl-6">
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
      <div class="col-12 col-xl-6">
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
  </div>
</template>