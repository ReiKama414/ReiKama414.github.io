<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    this.posts = await this.$content('tech').sortBy('createdAt', 'desc').fetch();
  },
};
</script>

<template>
  <div class="main">
    <CatHeaderItem />
    <div class="al">
      <ArticleItem v-for="(post, index) of posts" :key="index" :post="post"></ArticleItem>
    </div>
  </div>
</template>