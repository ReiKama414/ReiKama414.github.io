<script>
export default {
  name: 'Resource',
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    this.posts = await this
      .$content('resource')
      .without(['body'])
      .sortBy('createdAt', 'desc')
      .fetch();
  },
};
</script>

<template>
  <div class="main pfl">
    <div class="hd-i-w" style="background-image: url(/_nuxt/assets/images/background/art5.jpg); opacity: .75;"></div>

    <section class="area-tf mt-3">
      <h3>
        {{ $t("resource") }}
      </h3>
      <p>blablablablablablablablabla</p>

      <div class="d-flex mt-4 justify-content-center mb-5">
        <div class="bg-primary-lighten d-inline-flex rounded" style="width: 4rem; height: 0.25rem;"></div>
      </div>
    </section>
    <div class="al">
      <ResourceItem v-for="(post, index) of posts" :key="index" :post="post"></ResourceItem>
    </div>
  </div>
</template>