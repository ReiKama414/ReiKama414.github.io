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
  methods: {
    formatDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },
  },
};
</script>

<template>
  <article class="rscp-card col-12 col-sm-6 col-lg-4">
    <div class="post-img">
      <nuxt-link :to="localePath(`/blog/${post.slug}`)">
        <img alt="Title img" :src="require(`~/assets/images/blog/${post.image}`)" />
      </nuxt-link>
    </div>
    <div class="post-info text-left pt-2">
      <div class="post-tag">
        <NuxtLink :to="localePath(`/tags/${post.type}`)" class="text-capitalize">
          {{ $t(`${post.type}`) }}
        </NuxtLink>
      </div>
      <h3 class="font-weight-bold">
        <nuxt-link :to="localePath(`/blog/${post.slug}`)" :title="post.title">
          {{ post.title }}
        </nuxt-link>
      </h3>
      <p>{{ post.description }}</p>
      <div class="d-flex justify-content-between align-items-end">
        <div>
          <fa :icon="['fa-regular', 'calendar-check']" class="mr-1" />
          {{ formatDate(post.createdAt) }}
        </div>
        <a :href="post.go" target="_blank">
          <fa :icon="['fa-solid', 'up-right-from-square']" />
        </a>
      </div>
    </div>
  </article>
</template>

<style lang="sass">
.rscp-card.col-12,
.rscp-card.col-sm-6,
.rscp-card.col-lg-4
    padding-right: 15px
    padding-left: 15px
</style>