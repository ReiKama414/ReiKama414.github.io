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
    };
  },
};
</script>

<template>
  <article class="rlt-card card-widget d-flex p-3">
    <div class="pr-3 text-left">
      <h2>
        <nuxt-link :to="localePath(`/blog/${post.slug}`)" :title="post.title">
            {{ post.title }}
        </nuxt-link>
      </h2>
      <nuxt-link :to="localePath(`/blog/${post.slug}`)">
        <span class="multiline-ellipsis mb-3">{{ post.description }}</span>
      </nuxt-link>
      <div class="d-flex catrt">
        <div class="py-1 px-2 mr-2">
            <NuxtLink :to="localePath(`/${post.category}`)">{{ $t(`${post.category}`) }}</NuxtLink>
        </div>
        <p class="mb-0 align-self-center">
            {{ $t("about2") }} {{ post.readingTime.words }} {{ $t("word") }}
            ({{ Math.ceil(post.readingTime.minutes) }}{{ $t("minread") }})
        </p>
      </div>
    </div>
    <nuxt-link :to="localePath(`/blog/${post.slug}`)" class="rlt-img">
      <picture>
        <img alt="Title img" :src="require(`~/assets/images/blog/${post.image}`)" />
      </picture>
    </nuxt-link>
  </article>
</template>
