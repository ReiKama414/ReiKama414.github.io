<script>
export default {
  name: 'Daily',
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    this.posts = await this
      .$content('daily')
      .without(['body'])
      .sortBy('createdAt', 'desc')
      .fetch();
  },
};
</script>

<template>
  <div class="main">
    <CatHeaderItem :imgsrc="'art2.jpg'" />
    <div class="al">
      <ArticleItem v-for="(post, index) of posts" :key="index" :post="post"></ArticleItem>
    </div>
  </div>
</template>