<script>
export default {
  props: {
    post: {
      type: [Array, Object],
      default() {
          return {}
      },
    },
  },
};
</script>

<template>
  <article :data-tgflt="post.type" class="area-wks" >
    <div class="wks-card p-0 card-widget">
      <div class="imgWpr">
        <img alt="portfolioImg" :src="require(`~/assets/images/blog/${post.image}`)" />
      </div>
      <div class="textCntent">
        <a v-if="post.demo" :href="post.demo" target="_blank" class="dm_a mt-2 ml-2 p-2 font-weight-bold">
          {{ $t("demo") }}
        </a>
        <span v-else></span>
        <div class="w-100 p-3 d-flex flex-column">
          <span class="px-2 py-1 mb-2" :data-tgflt=post.type>{{ $t(`${post.type}`) }}</span>
          <h3 class="font-weight-light multiline-ellipsis" :title="post.name">
            {{ post.name }}
          </h3>
          <p class="mb-2 multiline-ellipsis">
            {{ post.introduction }}
          </p>
          <!-- <nuxt-link
            :to="localePath(`/blog/${post.slug}`)"
            class="rm_a font-weight-normal align-self-end ud"
          >
            {{ $t("readmore") }}
          </nuxt-link> -->
          <a
            :href="`https://${host}/reikama/blog/${post.slug}`"
            class="rm_a font-weight-normal align-self-end ud"
          >
            {{ $t("readmore") }}
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
