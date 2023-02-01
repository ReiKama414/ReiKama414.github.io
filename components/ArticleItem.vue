<script>
import moment from 'moment';
export default {
  props: {
    post: {
      type: [Array, Object],
      default() {
          return {}
      },
    },
  },
  data() {
    return {
      today: moment().format("YYYY-MM-DD HH:MM"),
      host: null,
    };
  },
  computed: {
    Countyear() {
      return moment(this.today).diff(this.post.createdAt, "years");
    },
    Countmonth() {
      return moment(this.today).diff(this.post.createdAt, "months");
    },
    Countdate() {
      return moment(this.today).diff(this.post.createdAt, "days");
    },
    Counthour() {
      return moment(this.today).diff(this.post.createdAt, "hours");
    },
    Countmin() {
      return moment(this.today).diff(this.post.createdAt, "minutes");
    },
  },
  mounted() {
    this.host = window.location.host;
  },
};
</script>

<template>
  <article class="arc-card card-widget d-flex">
    <div class="col-12 col-sm-4 arc-img">
      <picture>
        <img alt="Title img" :src="require(`~/assets/images/blog/${post.image}`)" />
      </picture>
    </div>
    <div class="col-12 col-sm-8 arc-content p-3">
      <h2 class="arc-title">
        <!-- <nuxt-link :to="localePath(`/blog/${post.slug}`)" :title="post.title">
            {{ post.title }}
        </nuxt-link> -->
        <a :href="`https://${host}/blog/${post.slug}`" :title="post.title">
            {{ post.title }} 
        </a>
      </h2>
      <div class="arc-info d-flex">
        <p v-if="(Countyear > 0)">{{ Countyear }}{{ $t("timeyy") }}</p>
        <p v-else-if="(Countmonth > 0)">{{ Countmonth }}{{ $t("timemm") }}</p>
        <p v-else-if="(Countdate > 0)">{{ Countdate }}{{ $t("timedd") }}</p>
        <p v-else-if="(Counthour > 0)">{{ Counthour }}{{ $t("timehh") }}</p>
        <p v-else-if="(Countmin > 0)">{{ Countmin }}{{ $t("timemin") }}</p>
        <p v-else>{{ $t("justnow") }}</p>
        <span>|</span>
        <NuxtLink :to="localePath(`/${post.category}`)">{{ $t(`${post.category}`) }}</NuxtLink>
        &emsp;
        <p class="rtw">{{ $t("about2") }}{{ post.readingTime.words }}{{ $t("word") }}</p>
      </div>
      <div class="arc-intro">
        <span class="multiline-ellipsis">{{ post.description }}</span>
      </div>
      <div class="arc-tagslist">
        <span v-for="tag of post.tags" :key="tag" class="ml-2">
          <NuxtLink v-if="$te(tag)" :to="localePath(`/tags/${tag.toLowerCase()}`)" class="ud">
            #{{ $t(`${tag}`) }}
          </NuxtLink>
          <NuxtLink v-else :to="localePath(`/tags/${tag.toLowerCase()}`)" class="ud">
            #{{ tag }}
          </NuxtLink>
        </span>
      </div>
    </div>
  </article>
</template>
