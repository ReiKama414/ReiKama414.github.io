<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    this.posts = await this.$content('', { deep: true }).sortBy('createdAt', 'desc').fetch();
  },
};
</script>

<template>
  <div class="main">
    <CarouselItem />
    <div class="al">
      <ArticleItem v-for="(post, index) of posts" :key="index" :post="post"></ArticleItem>
    </div>
  </div>
</template>