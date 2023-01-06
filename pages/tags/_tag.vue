<script>
export default {
  name: 'Tag',
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    this.posts = await this
      .$content('', { deep: true })
      .without(['body'])
      .sortBy('createdAt', 'desc')
      .fetch();
    this.posts = this.posts.filter(
      post => post.tags
        .map(element => {
          return element.toLowerCase();
        })
        .includes(this.$route.params.tag)
    );
  },
}
</script>

<template>
  <div class="main">
    <div class="card-widget">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0 pr-1 pl-1">
          <li class="breadcrumb-item">
            <NuxtLink :to="localePath(`/tag`)">
              {{ $t("tags") }}
            </NuxtLink>
          </li>
          <li class="breadcrumb-item active">
            <a href="#">
              {{ $t(`${$route.params.tag}`) }}
            </a>
          </li>
        </ol>
      </nav>
    </div>
    
    <div class="al">
      <ArticleItem v-for="(post, index) of posts" :key="index" :post="post"></ArticleItem>
    </div>
  </div>
</template>