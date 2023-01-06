<script>
export default {
  name: 'Tech',
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    this.posts = await this
      .$content('tech')
      .without(['body'])
      .sortBy('createdAt', 'desc')
      .fetch();
  },
};
</script>

<template>
  <div class="main">
    <CatHeaderItem :imgsrc="'art1.jpg'" />
    <div class="al">
      <ArticleItem v-for="(post, index) of posts" :key="index" :post="post"></ArticleItem>
    </div>
  </div>
</template>